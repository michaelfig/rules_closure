goog.setTestOnly();
goog.require('goog.testing.asserts');
goog.require('goog.testing.jsunit');
goog.require('goog.testing.testSuite');

goog.scope(function() {
    const Lenient = goog.require('rules_closure.Lenient');
    
    goog.testing.testSuite({
      testMe: function() {
        assertEquals(Lenient(), 123);
      }
    });
    
});  // goog.scope
