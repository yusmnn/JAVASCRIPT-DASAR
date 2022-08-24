/*
  * block scope -> variable yang hanya bisa diakses dalam satu block '{}' ex: di bahasa c,c++,java.
  * javaScript Tidak menganut block scope tetapi function scope
  * 
*/

// global scope/window scope
var a = 1

// function scope
function test(b) { // b -> variable scope
  b = 2;

}
test 