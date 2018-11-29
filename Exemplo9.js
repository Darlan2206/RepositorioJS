// Uiilizar os Metacaracteres para sobstituir os conjuntos e espaços.
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

var telefone = "<table><tr><td>(80) 999778899</td></tr></table>";
console.log(regExp.test(telefone)); 

 