// var a = "";
// for(var i = 10; i>=1; i--){
//   for(var j = 1; j<=i; j++){
//     a += "*";
//   }
//   for(var k = 1; k<=j; j++){
//     a -= "*";
//   }
//   a += "\n";
// }


// console.log(a);

var i;
var j;
for (i = 0; i <= 5; i++ ){
  document.write("</br>");

  for ( j = 0; j < 6-i; j++ ){
  document.write( "&nbsp&nbsp" );
  }

  for ( j = 6-i; j <= 5; j++ ){
  document.write( "*" );
  }
  for ( j = 6-i; j <= 5; j++ ){
    document.write( "*" );
  }
}
document.write('<br />\n');

var rows = 5;
for (var i = rows; i--;) {
  var columns = 0;
  for ( j = 0; j < 5-i; j++ ){
    document.write( "&nbsp&nbsp" );
    }
  while (columns <= i) {
    document.write('*');
    columns++
  }
  document.write('<br />\n');

}