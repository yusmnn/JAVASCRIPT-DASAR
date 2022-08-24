// operator logika -> perator untuk dua buah data boolean
// hasilnya boolean (true atau false)
/*
&& dan -> semua harus true
|| atau -> salah satu true maka true
! Kebalikan -> jika true maka false . jika false maka true

*/

const nilaiUts = 80;
const nilaiUas = 70;
const batasLulus = 80;

const lulusUts = nilaiUts >= batasLulus;
const lulusUas = nilaiUas >= batasLulus;

const lulus = lulusUas || lulusUts;
document.writeln(lulus);


