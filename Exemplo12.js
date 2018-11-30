// Utilizar o REPLACE para substituir os numeros de telefone por "telefone"
var regExp = /\(\d{2}\)\s?\d{4,5}-?\d{4}/g;

var telefone = "<table><tr><td>(80) 999778899</td><td>(25) 9955-5522</td><td>(22)225553333</td></tr></table>";
console.log(telefone.replace(regExp, "telefone1")); 

  