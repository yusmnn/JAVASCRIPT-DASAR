// PROGRAM 1
// var jmlAngkot = 10;
// var angkotJalan = 7;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

//   if (noAngkot < angkotJalan) {
//     console.log("No. " + noAngkot + " Angkot jalan");  
//   }
//   else {
//     console.log("No. " + noAngkot + " Angkot Tidak jalan")    
//   }

// }


// PROGRAM 2
// var angka = prompt("Masukkan angka : ");

// if(angka % 2 === 0){
//   alert(angka + " angka genap");
// }
// else if(angka % 2 === 1){
//   alert(angka + " angka ganjil");
// }
// else{
//   alert("Yang anda masukkan bukan angka");
// }

// PROGRAM 3
var jmlAngkot = 10;
var angkotJalan = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

  
  if(noAngkot <= angkotJalan && noAngkot !== 5){
    console.log("No. " + noAngkot + " Angkot jalan.");
  }
  else if((noAngkot === 5) || (noAngkot === 8) || (noAngkot === 10)){
    console.log("No. " + noAngkot + " Angkot lembur*");
  }
  else{
    console.log("No. " + noAngkot + " Angkot tidak jalan");
  }

}