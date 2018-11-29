// Identificar as informações dentro de uma tabela.
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;

var telefone = "<table><tr><td>(80) 999778899</td></tr></table>";
console.log(regExp.test(telefone)); 

 