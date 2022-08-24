var pilihan = prompt(" 1. komputer \n 2. mouse \n 3. keyboard \n Masukkan nama alat :")

switch(pilihan){

  case "1":
    alert(" Harga : Rp.15.000.000,00");
  break;
  case "2":
    alert(" Harga : Rp.500.000,00");
  break;
  case "3":
    alert(" Harga : Rp.1.000.000,00");
  break;
  default:
    alert("Pilihan Salah!");
  break;
}