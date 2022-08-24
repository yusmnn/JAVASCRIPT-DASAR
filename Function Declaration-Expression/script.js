/*
  * Function Declaration
    function identifier (parameterList *opt) {
      // function body
    }

  *Function Expression
    var nameVarible = function identifier opt* (parameterList opt*) {
                          // function Body
                      }

*/

// function declaration
tampilNama("Yusman");

function tampilNama(nama){
  alert("Halo " + nama);
}

// function Expression
var tampilNama = function (nama1) {
  alert("Halo " + nama1);
}
// harus didefenisikan dulu (setelah function)
tampilNama("Yuss");