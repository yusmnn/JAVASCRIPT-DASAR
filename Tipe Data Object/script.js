// tipe data object -> mirip dengan array. perbedaannya index di tipe data object bisa menggunakan string
// index di object disebut attributes atau properties

// object kosong
const namaSiswa = {};

// menambah atau mengubah
namaSiswa["nama lengkap"] = "Yusman";
namaSiswa["alamat"] = "Indonesia";
namaSiswa["usia"] = 20;

console.table(namaSiswa);

// menghapus satu attributes/properties
delete namaSiswa["usia"];
console.table(namaSiswa);


// object langsung dengan properties
const namaSiswa2 = {
  "nama lengkap2" : "Yusmannnn",  // jika indexnya dua kata atau ada spasi, gunakan tanda kutip dua
  alamat2 : "Indonesia",
  usia2 : 20
};

console.table(namaSiswa2);


// mengakses property object
console.info(`ALamat2 : ${namaSiswa2.alamat2}`) // cara 1 (sering dipakai)
console.info(`Nama : ${namaSiswa["nama lengkap"]}`); // cara 2


