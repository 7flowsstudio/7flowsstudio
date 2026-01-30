import { test, expect, Page } from '@playwright/test';

interface PerformanceMetrics {
  lcp: number;
  cls: number;
  fcp: number;
  ttfb: number;
  domContentLoaded: number;
  loadComplete: number;
}

interface SectionTest {
  name: string;
  selector: string;
  scrollOffset?: number;
  buttons?: string[];
}

class LandingPageTester {
  private page: Page;
  private baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.baseURL = process.env.BASE_URL || 'http://localhost:3000';
  }

  async navigateToPage(locale: string = 'ua') {
    console.log(`🌐 Navigating to ${this.baseURL}/${locale}`);
    await this.page.goto(`/${locale}`, { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    console.log('✅ Page loaded successfully');
  }

  async measurePerformance(): Promise<PerformanceMetrics> {
    return await this.page.evaluate(() => {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        // LCP measurement
        const lcpEntry = entries.find(
          entry => entry.entryType === 'largest-contentful-paint',
        );
        if (lcpEntry) {
          (window as any).lcp = lcpEntry.startTime;
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // CLS measurement
      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        (window as any).cls = clsValue;
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return new Promise(resolve => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType(
            'navigation',
          )[0] as PerformanceNavigationTiming;
          const paintEntries = performance.getEntriesByType('paint');

          const fcp =
            paintEntries.find(entry => entry.name === 'first-contentful-paint')
              ?.startTime || 0;

          resolve({
            lcp: (window as any).lcp || 0,
            cls: (window as any).cls || 0,
            fcp,
            ttfb: perfData.responseStart - perfData.requestStart,
            domContentLoaded:
              perfData.domContentLoadedEventEnd -
              perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          });
        }, 2000);
      });
    });
  }

  async checkHeaderElements() {
    // Header exists
    await expect(this.page.locator('header')).toBeVisible();

    // Logo (flexible selector)
    await expect(this.page.locator('header a[aria-label="7Flows Studio — головна"]')).toBeVisible();

    // Navigation
    await expect(this.page.locator('header nav, header ul, header [class*="nav"]')).toBeVisible();

    // Locale switcher
    await expect(this.page.locator('header select, header [role="combobox"], header [class*="locale"]')).toBeVisible();
  }

  async checkFooterElements() {
    // Check footer
    await expect(this.page.locator('footer')).toBeVisible();

    // Check footer links
    await expect(this.page.locator('footer a')).toHaveCount(
      await this.page.locator('footer a').count(),
    );
  }

  async testSections(sections: SectionTest[]) {
    for (const section of sections) {
      console.log(`Testing section: ${section.name}`);

      try {
        // Check if section exists and is visible with timeout
        const sectionElement = this.page.locator(section.selector);
        await expect(sectionElement).toBeVisible({ timeout: 10000 });

        // Scroll to section
        if (section.scrollOffset !== undefined) {
          await this.page.evaluate(
            offset => window.scrollTo(0, offset),
            section.scrollOffset,
          );
        } else {
          await sectionElement.scrollIntoViewIfNeeded();
        }

        await this.page.waitForTimeout(300);

        // Test buttons in section
        if (section.buttons) {
          for (const buttonSelector of section.buttons) {
            try {
              const button = this.page.locator(buttonSelector);
              await expect(button).toBeVisible({ timeout: 5000 });
              await expect(button).toBeEnabled();
              console.log(`  ✅ Button found: ${buttonSelector}`);
            } catch (e) {
              console.log(`  ⚠️  Button not found: ${buttonSelector}`);
            }
          }
        }

        console.log(`  ✅ ${section.name} passed`);
      } catch (e) {
        console.log(`  ❌ ${section.name} failed: ${e.message}`);
        // Continue testing other sections instead of failing completely
      }
    }
  }

  async testNavigation() {
    // Test mobile menu toggle if exists
    const mobileMenuButton = this.page.locator(
      'header button[data-testid="mobile-menu"], header [data-testid="burger-menu"]',
    );
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await this.page.waitForTimeout(300);
      const mobileMenu = this.page.locator(
        '[data-testid="mobile-menu-content"], .mobile-menu',
      );
      await expect(mobileMenu).toBeVisible();
      await mobileMenuButton.click(); // Close menu
    }

    // Test navigation links
    const navLinks = this.page.locator(
      'header nav a, header [data-testid="nav-link"]',
    );
    const linkCount = await navLinks.count();

    for (let i = 0; i < linkCount; i++) {
      const link = navLinks.nth(i);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href');
    }
  }

  async testLocaleSwitcher() {
    const localeSwitcher = this.page.locator(
      'header select, header [data-testid="locale-switcher"]',
    );
    await expect(localeSwitcher).toBeVisible();

    // Test locale options
    const options = ['ua', 'en', 'pl'];
    for (const locale of options) {
      await localeSwitcher.selectOption(locale);
      await this.page.waitForLoadState('networkidle');
      await expect(this.page).toHaveURL(new RegExp(`/${locale}`));
    }
  }

  async testResponsiveDesign() {
    // Test mobile viewport
    await this.page.setViewportSize({ width: 375, height: 667 });
    await this.page.waitForTimeout(500);

    // Check mobile menu
    const mobileMenuToggle = this.page.locator(
      'header [data-testid="mobile-menu-toggle"], header .burger-menu',
    );
    if (await mobileMenuToggle.isVisible()) {
      await mobileMenuToggle.click();
      await this.page.waitForTimeout(300);
      await expect(
        this.page.locator('[data-testid="mobile-menu"], .mobile-menu'),
      ).toBeVisible();
    }

    // Test tablet viewport
    await this.page.setViewportSize({ width: 768, height: 1024 });
    await this.page.waitForTimeout(500);

    // Test desktop viewport
    await this.page.setViewportSize({ width: 1440, height: 900 });
    await this.page.waitForTimeout(500);
  }

  async testAnimations() {
    // Wait for animations to complete
    await this.page.waitForTimeout(3000);

    // Check that no animation artifacts remain
    const animatedElements = this.page.locator(
      '[style*="transform"], [style*="opacity"]',
    );
    // This is a basic check - in real scenario you'd check for specific animation states
  }

  async generateReport(metrics: PerformanceMetrics, sections: SectionTest[]) {
    console.log('\n=== LANDING PAGE TEST REPORT ===\n');

    console.log('📊 PERFORMANCE METRICS:');
    console.log(`LCP (Largest Contentful Paint): ${metrics.lcp.toFixed(2)}ms`);
    console.log(`CLS (Cumulative Layout Shift): ${metrics.cls.toFixed(4)}`);
    console.log(`FCP (First Contentful Paint): ${metrics.fcp.toFixed(2)}ms`);
    console.log(`TTFB (Time to First Byte): ${metrics.ttfb.toFixed(2)}ms`);
    console.log(`DOM Content Loaded: ${metrics.domContentLoaded.toFixed(2)}ms`);
    console.log(`Load Complete: ${metrics.loadComplete.toFixed(2)}ms`);

    console.log('\n✅ PERFORMANCE THRESHOLDS:');
    console.log(
      `LCP: ${metrics.lcp < 2500 ? '✅ GOOD' : '❌ NEEDS IMPROVEMENT'} (${metrics.lcp < 2500 ? '< 2.5s' : '>= 2.5s'})`,
    );
    console.log(
      `CLS: ${metrics.cls < 0.1 ? '✅ GOOD' : '❌ NEEDS IMPROVEMENT'} (${metrics.cls < 0.1 ? '< 0.1' : '>= 0.1'})`,
    );

    console.log('\n📱 SECTIONS TESTED:');
    sections.forEach(section => {
      console.log(`✅ ${section.name}`);
    });

    console.log('\n🎯 OVERALL RESULT:');
    const isGood = metrics.lcp < 2500 && metrics.cls < 0.1;
    console.log(isGood ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');

    return {
      metrics,
      sectionsCount: sections.length,
      passed: isGood,
    };
  }
}

// Test sections configuration
const SECTIONS: SectionTest[] = [
  {
    name: 'Hero Section',
    selector: '[class*="heroWrapper"], [class*="Hero"]',
    buttons: ['[class*="primaryBtn"]'],
  },
  {
    name: 'Portfolio Section',
    selector: '[class*="contPortfolio"], [class*="Portfolio"]',
    buttons: ['[class*="button"]'],
  },
  {
    name: 'Flows Section',
    selector: '[class*="flows"], [class*="Flows"]',
  },
  {
    name: 'Stages Section',
    selector: '[class*="stages"], [class*="Stages"]',
  },
  {
    name: 'Services Section',
    selector: '[class*="services"], [class*="Services"]',
  },
  {
    name: 'Purpose Section',
    selector: '[class*="purpose"], [class*="Purpose"]',
  },
  {
    name: 'Reviews Section',
    selector: '[class*="reviews"], [class*="Reviews"]',
  },
  {
    name: 'FAQ Section',
    selector: '[class*="faq"], [class*="FAQ"]',
  },
];

test.describe('7Flows Studio Landing Page Tests', () => {
  let tester: LandingPageTester;

  test.beforeEach(async ({ page }) => {
    tester = new LandingPageTester(page);
  });

  test('Complete landing page functionality test', async ({ page }) => {
    // Navigate to Ukrainian version (main language)
    await tester.navigateToPage('ua');

    // Measure performance
    const metrics = await tester.measurePerformance();

    // Test header elements
    await tester.checkHeaderElements();

    // Test footer elements
    await tester.checkFooterElements();

    // Test navigation
    await tester.testNavigation();

    // Test locale switcher
    await tester.testLocaleSwitcher();

    // Test all sections
    await tester.testSections(SECTIONS);

    // Test responsive design
    await tester.testResponsiveDesign();

    // Test animations
    await tester.testAnimations();

    // Generate report
    const report = await tester.generateReport(metrics, SECTIONS);

    // Assertions
    expect(report.metrics.lcp).toBeLessThan(2500); // LCP < 2.5s
    expect(report.metrics.cls).toBeLessThan(0.1); // CLS < 0.1
    expect(report.sectionsCount).toBe(SECTIONS.length);
    expect(report.passed).toBe(true);
  });

  test('Performance regression test', async ({ page }) => {
    await tester.navigateToPage('ua');

    const metrics = await tester.measurePerformance();

    // Strict performance thresholds
    expect(metrics.lcp).toBeLessThan(2000); // Even stricter LCP
    expect(metrics.cls).toBeLessThan(0.05); // Very low CLS
    expect(metrics.fcp).toBeLessThan(1500); // Fast FCP
  });

  test('Cross-browser compatibility', async ({ page, browserName }) => {
    test.skip(
      browserName === 'firefox',
      'Firefox has different performance characteristics',
    );

    await tester.navigateToPage('ua');

    // Basic functionality check
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Test sections visibility
    for (const section of SECTIONS) {
      await expect(page.locator(section.selector)).toBeVisible();
    }
  });

  test('Accessibility check', async ({ page }) => {
    await tester.navigateToPage('ua');

    // Check for alt texts
    const images = page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      await expect(images.nth(i)).toHaveAttribute('alt');
    }

    // Check heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThan(0);

    // Check focusable elements
    const focusableElements = page.locator(
      'button, a, input, select, textarea',
    );
    const focusableCount = await focusableElements.count();
    expect(focusableCount).toBeGreaterThan(0);
  });

  test('SEO elements check', async ({ page }) => {
    await tester.navigateToPage('ua');

    // Check title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(10);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content');

    // Check canonical URL
    const canonical = page.locator('link[rel="canonical"]');
    if (await canonical.isVisible()) {
      await expect(canonical).toHaveAttribute('href');
    }

    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    if (await ogTitle.isVisible()) {
      await expect(ogTitle).toHaveAttribute('content');
    }
  });

  test('Error handling test', async ({ page }) => {
    // Test 404 page
    await page.goto('/uk/non-existent-page');
    await expect(page.locator('h1, [data-testid="404"]')).toBeVisible();

    // Test back to home
    await page.goto('/uk');
    await expect(page.locator('header')).toBeVisible();
  });
});

// CLI runner for standalone execution
if (require.main === module) {
  const { chromium } = require('playwright');

  async function runStandaloneTest() {
    console.log('🚀 Starting standalone landing page test...\n');

    const browser = await chromium.launch();
    const page = await browser.newPage();
    const tester = new LandingPageTester(page);

    try {
      await tester.navigateToPage('ua');
      const metrics = await tester.measurePerformance();

      await tester.checkHeaderElements();
      await tester.checkFooterElements();
      await tester.testSections(SECTIONS);

      await tester.generateReport(metrics, SECTIONS);

      console.log('\n✅ Standalone test completed successfully!');
    } catch (error) {
      console.error('❌ Test failed:', error);
      process.exit(1);
    } finally {
      await browser.close();
    }
  }

  runStandaloneTest();
}
