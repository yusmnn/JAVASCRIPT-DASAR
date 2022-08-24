// array -> tipe data yang berisikan kumpulan data
// array javaScript bersifat dinamis (data bisa bertambah sendiri saat dimasukkan ke dalam arraynya)
// berbeda dengan java yang panjang arranya ditentukan lebih dulu
// array disimpan berurutan dimulai nol (disebut index)

let arraykosong = [];

let arrayIsiString = ["a","b","c","d","e","f"]; // indexnya 5 . panjangnya 6

let arrayIsiAngka = [0,1,2,3,4]; // indexnya 4 . panjangnya 5

/*
array.pushz(value) -> tambah data ke array
array.length -> mendapatkan panjang array
array[index] -> mendapatkan data di posisi index
array[index] = value -> ubah data ke posisi index
delete array[index] -> hapus data di posisi index, tapi index tidak bergeser
dll
*/


const nama = ["yusman", "yusma", "yusm"];

// menambah array
nama.push("Yusss");
console.table(nama);

// panjang array
nama.length;
console.table(nama);

//lihat data berdasarkan index
nama[0];
console.table(nama);

//hapus data di array
delete nama[2];
console.table(nama);

// isi kembali data array di index 2
nama[2] = "Yusmannnn";
console.table(nama);

// array javascript boleh beda tipe data
nama.push(4,5,6,7);
console.table(nama);

// bisa juga array didalam array
nama.push(["yussss","yus"]);
console.table(nama);