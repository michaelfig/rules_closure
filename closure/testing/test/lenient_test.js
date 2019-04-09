goog.setTestOnly();
goog.require('goog.testing.asserts');
goog.require('goog.testing.jsunit');
goog.require('goog.testing.testSuite');

goog.scope(function() {
    const Lenient = goog.require('rules_closure.Lenient');
    
    goog.testing.testSuite({
      testMe: function() {
        // Without "lenient = True" on the lenient_test rule, this line
        // fails with "ERROR - could not determine the type of this expression"
        const val = Lenient();
        assertEquals(val, 123);
      }
    });
    
});  // goog.scope
