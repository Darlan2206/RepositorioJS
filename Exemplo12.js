// Utilizar as APIs da String para retornar o numero dentro da string.
var regExp = /\(\d{2}\)\s?\d{4,5}-?\d{4}/g;

var telefone = "<table><tr><td>(80) 999778899</td><td>(25) 9955-5522</td><td>(22)225553333</td></tr></table>";
console.log(telefone.replace(regExp, "telefone1")); 

  