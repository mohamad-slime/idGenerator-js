/**
 * Simple test suite for the idGenerator module
 */
import { generateId } from './idGenerator.js';

// Test function to run all tests
function runTests() {
  console.log('Running idGenerator tests...');
  
  // Test 1: Default parameters
  const defaultId = generateId();
  console.log('Test 1: Default parameters');
  console.log(`  Result: ${defaultId}`);
  console.log(`  Length check: ${defaultId.length === 6 ? 'PASS' : 'FAIL'}`);
  console.log('');
  
  // Test 2: Custom length
  const customLengthId = generateId(10);
  console.log('Test 2: Custom length (10)');
  console.log(`  Result: ${customLengthId}`);
  console.log(`  Length check: ${customLengthId.length === 10 ? 'PASS' : 'FAIL'}`);
  console.log('');
  
  // Test 3: Custom character set
  const numericId = generateId(8, '0123456789');
  console.log('Test 3: Numeric-only ID');
  console.log(`  Result: ${numericId}`);
  console.log(`  Length check: ${numericId.length === 8 ? 'PASS' : 'FAIL'}`);
  console.log(`  Numeric check: ${/^\d+$/.test(numericId) ? 'PASS' : 'FAIL'}`);
  console.log('');
  
  // Test 4: With prefix
  const prefixedId = generateId(6, undefined, 'user_');
  console.log('Test 4: ID with prefix');
  console.log(`  Result: ${prefixedId}`);
  console.log(`  Prefix check: ${prefixedId.startsWith('user_') ? 'PASS' : 'FAIL'}`);
  console.log(`  Total length check: ${prefixedId.length === 11 ? 'PASS' : 'FAIL'}`);
  console.log('');
  
  // Test 5: Uniqueness test (basic)
  const ids = new Set();
  for (let i = 0; i < 1000; i++) {
    ids.add(generateId());
  }
  console.log('Test 5: Basic uniqueness test');
  console.log(`  Generated 1000 IDs`);
  console.log(`  Unique IDs: ${ids.size}`);
  console.log(`  Uniqueness check: ${ids.size === 1000 ? 'PASS' : 'FAIL'}`);
  
  console.log('\nAll tests completed!');
}

// Run the tests
runTests();