#!/usr/bin/env node

/**
 * Quick check script for basic landing page functionality
 * Can be run without Playwright for basic validation
 */

const http = require('http');

function checkServer(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          html: data
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function quickCheck() {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const locales = ['uk', 'en', 'pl'];

  console.log('🔍 Quick landing page check\n');

  for (const locale of locales) {
    const url = `${baseUrl}/${locale}`;
    console.log(`Testing ${url}...`);

    try {
      const response = await checkServer(url);

      if (response.status === 200) {
        console.log(`  ✅ Status: ${response.status}`);

        // Check for basic HTML structure
        const checks = [
          { name: 'Header', pattern: /<header|<nav/ },
          { name: 'Footer', pattern: /<footer/ },
          { name: 'Title', pattern: /<title/ },
          { name: 'Meta description', pattern: /name="description"/ },
          { name: 'Hero section', pattern: /hero|Hero/ },
          { name: 'Scripts loaded', pattern: /<script/ },
        ];

        checks.forEach(check => {
          if (check.pattern.test(response.html)) {
            console.log(`  ✅ ${check.name}`);
          } else {
            console.log(`  ❌ ${check.name} not found`);
          }
        });

      } else {
        console.log(`  ❌ Status: ${response.status}`);
      }

    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
    }

    console.log('');
  }

  console.log('🎯 Quick check completed!');
  console.log('💡 For full testing run: npm run test:landing');
}

// Run if called directly
if (require.main === module) {
  quickCheck().catch(console.error);
}

module.exports = { quickCheck };
