/*
+ pertambahan
- pengurangan
* perkalian
** Exponensial atau pangkat
/ pembagian
% sisa bagi atau modulo
dll
*/

document.writeln("Operator aritmatika: ");
let result = 1 + 7;
document.writeln("<p> 1 + 7 = " + result + "</p>");
// nilai result = 8

result = result - 2;
document.writeln("<p> 8 - 2 = " + result + "</p>");
// nilai result menjadi 6

result = result * 2;
document.writeln("<p> 6 * 2 = " + result + "</p>");
// nilai result menjadi 12

result = result / 2;
document.writeln("<p> 12 / 2 = " + result + "</p>");
// nilai result menjadi 6

result = result ** 2;
document.writeln("<p> 6 pangkat 2 = " + result + "</p>");
// nilai result menjadi 36

result = result %= 5;
document.writeln("<p> 36 % 4 = " + result + "</p>");
// nilai result menjadi 1

document.writeln("</br>");



document.writeln("Operator Augmented assigments");
result += 5;
document.writeln(" <p> 1 += 5 = " + result + "</p>");

result -= 1;
document.writeln(" <p> 6 -= 1 = " + result + "</p>");

result *= 5;
document.writeln(" <p> 5 *= 5 = " + result + "</p>");

result /= 2;
document.writeln(" <p> 25 /= 2 = " + result + "</p>");

result %= 5;
document.writeln(" <p> 12.5 %= 5 = " + result + "</p>");

result **= 2;
document.writeln(" <p> 2.5 **= 2 = " + result + "</p>");

document.writeln("</br>");


document.writeln("Operator Unary"); //biasanya digunakan untuk satu data saja bukan unutk kombinasi data

let angka = +1;
angka++;
document.writeln("<p>" + angka + "</p>");

angka--;
document.writeln("<p>" + angka + "</p>");

angka = -angka; //menjadi negatif
document.writeln("<p>" + angka + "</p>");