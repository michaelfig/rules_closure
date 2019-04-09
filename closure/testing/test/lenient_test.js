goog.module('rules_closure.LenientTest');
goog.setTestOnly('rules_closure.LenientTest');

const testSuite = goog.require('goog.testing.testSuite');
const Lenient = goog.require('rules_closure.Lenient');

testSuite({
    testMe: function() {
    // Without "lenient = True" on the lenient_test rule, this line
    // fails with "ERROR - could not determine the type of this expression"
    const val = Lenient();
    assertEquals(val, 123);
    }
});
