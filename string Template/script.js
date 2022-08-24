const namaDepan = "Yusman";
const namaTengah = "D";
const namaBelakang = "Yuntu";

const stringTemplate = `nama : ${namaDepan} ${namaTengah} ${namaBelakang}`; // string template menggunakan backtick

console.info(stringTemplate);


// ekspresi dengan string template
const nilai = 85;
const stringTemplate2 = `nama : ${namaDepan} ${namaTengah}, nilai : ${nilai >= 80}`;

console.info(stringTemplate2);


// multiline string template
let dataDiri = `nama saya Yusman,
Kuliah di UMI,
Jurusan TI.`;

document.writeln("<pre>");
document.writeln(dataDiri);
document.writeln("</pre");
