const nilai1 = parseInt("3"); // string ke number
const nilai2 = 3;

const jumlah = nilai1 + nilai2;

document.writeln(`<p>${jumlah}</p>`); // keduanya jadi tipe data string;

document.writeln(`<P>${parseInt("3.14")}</p>`); // string ke number (bilangan bulat)
document.writeln(`<p>${parseFloat("3.14")}</p>`); // string ke number (pecahan)
document.writeln(`<p>${Number("22.7")}</p>`) // string ke number (bilangan bulat atau pecahan)

const variableKe1 = 66;
const variableKe2 = 6;
const total = variableKe1.toString() + variableKe2.toString();  // number ke string

document.writeln(`<p>${total}</p>`)


// NAN (not a number)
document.writeln(`<P>${parseInt("1salah")}</p>`); // mengambil depan saja
document.writeln(`<P>${parseFloat("2.3salah")}</p>`); // mengambil angka saja

document.writeln(`<P>${Number("4salah")}</p>`); // jadi NAN
document.writeln(`<P>${Number("3.14salah")}</p>`); // jadi NAN
document.writeln(`<P>${Number("salah")}</p>`); // jadi NAN


// operasi pada NaN hasilnya tetap NaN
const a = 2;
const b = Number("salah");

const sum = a + b;

document.writeln(`<P>${sum}</p>`); // jadi NAN


// fungsi isNaN()
document.writeln(`<P>${isNaN(b)}</p>`); // returnnya true
document.writeln(`<P>${isNaN(11)}</p>`); // returnnya false







