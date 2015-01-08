QUnit.test("hello test", function(assert){
   assert.ok( 1=="1", "Passed!");
});

//Test is intended to fail
QUnit.test("hello test fail", function(assert){
   assert.ok( 1==="1", "Passed!");
});

/*
    DEMO: String Comparisons with assert.equal
*/
//This test is intended to demonstrate a fail
QUnit.test("Foo Fail", function(assert){
   assert.equal( foo("hey"), "hello", "Passed!");
});

QUnit.test("Foo Pass", function(assert){
   assert.equal( foo("hey"), "hey", "Should Pass!");
});



