// Global teardown for Playwright tests
async function globalTeardown() {
  console.log('🧹 Cleaning up global test environment...');

  // Add any global cleanup logic here
  // For example: database cleanup, test data removal, etc.

  console.log('✅ Global teardown completed');
}

export default globalTeardown;


