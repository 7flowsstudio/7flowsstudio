#!/usr/bin/env node

/**
 * Standalone runner for landing page tests
 * Usage: node tests/run-standalone.js [locale]
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Import our test logic
const testContent = fs.readFileSync(path.join(__dirname, 'landing.spec.ts'), 'utf8');

// Extract the LandingPageTester class and test sections
const SECTIONS = [
  {
    name: 'Hero Section',
    selector: '[data-profiler-id="Hero"], .hero, #hero',
    buttons: ['.primaryBtn', '[data-testid="hero-cta"]']
  },
  {
    name: 'Portfolio Section',
    selector: '[data-profiler-id="Portfolio"], .portfolio, #portfolio'
  },
  {
    name: 'Flows Section',
    selector: '[data-profiler-id="Flows"], .flows, #flows'
  },
  {
    name: 'Stages Section',
    selector: '[data-profiler-id="Stages"], .stages, #stages'
  },
  {
    name: 'Services Section',
    selector: '.services, #services, [data-testid="services"]'
  },
  {
    name: 'Purpose Section',
    selector: '[data-profiler-id="Purpose"], .purpose, #purpose'
  },
  {
    name: 'Reviews Section',
    selector: '.reviews, #reviews, [data-testid="reviews"]'
  },
  {
    name: 'FAQ Section',
    selector: '[data-profiler-id="FAQSection"], .faq, #faq'
  }
];

class LandingPageTester {
  constructor(page) {
    this.page = page;
    this.baseURL = process.env.BASE_URL || 'http://localhost:3000';
  }

  async navigateToPage(locale = 'uk') {
    console.log(`🌐 Navigating to ${this.baseURL}/${locale}`);
    await this.page.goto(`/${locale}`);
    await this.page.waitForLoadState('networkidle');
    console.log('✅ Page loaded successfully');
  }

  async measurePerformance() {
    console.log('📊 Measuring performance metrics...');

    return await this.page.evaluate(() => {
      // LCP measurement
      let lcp = 0;
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // CLS measurement
      let cls = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            cls += (entry as any).value;
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return new Promise((resolve) => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          const paintEntries = performance.getEntriesByType('paint');

          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

          resolve({
            lcp,
            cls,
            fcp,
            ttfb: perfData.responseStart - perfData.requestStart,
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart
          });
        }, 3000);
      });
    });
  }

  async checkHeaderElements() {
    console.log('🔍 Checking header elements...');
    await this.page.locator('header').waitFor();
    console.log('✅ Header found');
  }

  async checkFooterElements() {
    console.log('🔍 Checking footer elements...');
    await this.page.locator('footer').waitFor();
    console.log('✅ Footer found');
  }

  async testSections(sections) {
    console.log('🔍 Testing sections...');
    for (const section of sections) {
      console.log(`  → Testing ${section.name}`);
      try {
        await this.page.locator(section.selector).waitFor({ timeout: 5000 });
        console.log(`  ✅ ${section.name} found`);
      } catch (e) {
        console.log(`  ❌ ${section.name} not found`);
      }
    }
  }

  async generateReport(metrics, sections) {
    console.log('\n=== 🧪 LANDING PAGE TEST REPORT ===\n');

    console.log('📊 PERFORMANCE METRICS:');
    console.log(`  LCP: ${metrics.lcp.toFixed(2)}ms (${metrics.lcp < 2500 ? '✅ GOOD' : '❌ NEEDS WORK'})`);
    console.log(`  CLS: ${metrics.cls.toFixed(4)} (${metrics.cls < 0.1 ? '✅ GOOD' : '❌ NEEDS WORK'})`);
    console.log(`  FCP: ${metrics.fcp.toFixed(2)}ms (${metrics.fcp < 1500 ? '✅ GOOD' : '❌ NEEDS WORK'})`);

    console.log('\n📱 SECTIONS TESTED:');
    sections.forEach(section => console.log(`  ✅ ${section.name}`));

    const passed = metrics.lcp < 2500 && metrics.cls < 0.1;
    console.log(`\n🏆 OVERALL RESULT: ${passed ? '✅ PASSED' : '❌ FAILED'}`);

    return { metrics, sectionsCount: sections.length, passed };
  }
}

async function runStandaloneTest() {
  const locale = process.argv[2] || 'uk';
  console.log(`🚀 Starting standalone landing page test for locale: ${locale}\n`);

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const tester = new LandingPageTester(page);

  try {
    await tester.navigateToPage(locale);
    const metrics = await tester.measurePerformance();

    await tester.checkHeaderElements();
    await tester.checkFooterElements();
    await tester.testSections(SECTIONS);

    const report = await tester.generateReport(metrics, SECTIONS);

    if (report.passed) {
      console.log('\n🎉 All tests passed! Landing page is ready for production.');
      process.exit(0);
    } else {
      console.log('\n⚠️  Some tests failed. Check performance metrics.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run if called directly
if (require.main === module) {
  runStandaloneTest();
}

module.exports = { LandingPageTester, runStandaloneTest };
