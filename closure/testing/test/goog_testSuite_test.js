
goog.module('rules_closure.GoogTestSuiteTest');
goog.setTestOnly('rules_closure.GoogTestSuiteTest');

const GTS = goog.require('rules_closure.GoogTestSuite');
const testSuite = goog.require('goog.testing.testSuite');

testSuite({
  testBasic() {
    assertEquals(GTS, 123);
  }
});
