var jumlahAngkot = 10;
var angkotJalan = 6;
var noAngkot = 1;

while(noAngkot <= angkotJalan){

  console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik. ");
noAngkot++;
}

for(angkotRusak = angkotJalan +1; angkotRusak <= jumlahAngkot; angkotRusak++){
  console.log("Angkot No. " + angkotRusak  + " tidak beroperasi.");
}