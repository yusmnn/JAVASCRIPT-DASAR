/*
Angka tanpa decimal
-10, 1500, 123456
. akurat sampai 15 digit

Angka dengan desimal
-3.14 , 0.5 , 100.00
. menggunakan titik
. maksimal menyimpan 17 digit dibelakang koma
. hati-hati menghitung pecahan karena hasilnya tidak terlalu akurat
  ex : 0.2 + 0.1 = 0.3000000000004

Angka eksponen
-123e5 = 12300000
-123-e5 = 0.00123

Bilangan negatif

* jangan pernah memasukkan angka diawali nol(akan dianggap bilangan oktal)
ex: 022 menjadi 18

* jangan pernah memasukkan angka diawali 0xFF(akan dianggap bilangan hexadecimal)
ex: 0xFF menjadi 255


Angka special
. 0 / 0 = Infinity
. -100 / 0 = -Infinity
. 0 / 0 = NaN
. 5 / "apel" = NaN
. 100 /"10" = 10

/ bisa  menggunakan petik dua atau petik satu *harus konsisten
/ bisa menggunakan titik koma atau tidak

*/

// tipe data number
document.writeln("100");
document.writeln("</br>");
document.writeln("3.14");
document.writeln("</br>");

document.writeln(0b1001); // binary
document.writeln(0xAF)  // hexadecimal
document.writeln(0o12) // octal

document.writeln("</br>");

// tipe data boolean 
document.writeln(true);
document.writeln(false);

document.writeln("</br>");

// tipe data string 
document.writeln("Hello world!");
document.writeln("</br>");
document.writeln("Nama : " + "Yusman " + "Teknik Informatika"); // menambah string menggunakan tanda +
document.writeln("</br>");
// escape sequence
/*
\n  enter
\t  tab
\'  '
\"  "
\\  \
dll
*/
document.writeln("<textarea cols = '100' rows = '10'>");
document.write("Yusman\n");
document.write("\\home\\Yusman\n");
document.write("\"Belajar javascript\"\n");
document.write('\'Belajar javascript dasar\'\n');
document.write("Kanpacida\😎\n");
document.writeln("</textarea>");  
