var name ="Yusman";
console.log(name.charAt(5));

// memanggil function
alert(totalVolumeCube(8,3));

var a = parseInt(prompt("Input a : "));
var b = parseInt(prompt("Input b : "));
alert(tambah(a,b));


parseInt(alert("Fungsi menggunakan arguments :" + kaliArguments(1,2,3,4)));

// contoh function
function totalVolumeCube(a, b) {
  var total;
  return total = (a * a * a) + (b * b * b);

}

function tambah(a,b) {
  return a + b;
}

// sudo function
function kaliArguments() {
  var hasil = 0;
  for( var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}