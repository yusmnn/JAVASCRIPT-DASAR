/*
  * recursive -> pemanggilan berulang-ulang
  * Base case -> kondisi akhir dari recursive yang menghasilkan nilai

*/

// function biasa
for ( var i = 3; i > 0; i--) {

  console.log(i);

}

// function recursive
function recursiveNumber(i) {

  // Base case
  if(i === 0) {
    return;
  }

  console.log(i);
  return recursiveNumber(i - 1);
}

recursiveNumber(4);

//function faktorial ex, 3! = 3*2*1 = 6
function factorial(i) {
  if (i === 0) {
    return 1;
  }

  console.log(i + "!");

  return i * factorial(i-1);
}

console.log(factorial(3));