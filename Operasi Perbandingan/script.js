// operasi perbandingan -> operator yang digunakan unutk membandingkan dua buah data
// yang nilainya true atau false
/*

> Lebih dari
< kurang dari
>= lebih dari sama dengan
<= Kurang dari sama dengan
== sama dengam
=== sama dengan dan sama tipe
!= tidak sama dengan
!== tidak sama dengan atau tidak sama tipe

*/

let result = 8 > "7";
document.writeln ("<p>" + result + "</p>");

result = 7 < 8;
document.writeln ("<p>" + result + "</p>");

result = 8 >= 8;
document.writeln ("<p>" + result + "</p>");

result = 7 <= "9";
document.writeln ("<p>" + result + "</p>");

result = 5 == "5";
document.writeln ("<p>" + result + "</p>");

result = "5" === "5";
document.writeln ("<p>" + result + "</p>");

result = 7 != 6;
document.writeln ("<p>" + result + "</p>");

result = 4 !== "4";
document.writeln ("<p>" + result + "</p>");