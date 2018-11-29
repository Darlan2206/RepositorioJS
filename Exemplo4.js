// Define uma série de conjuntos para ampliar a aceitação da solicitação.
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(48) 9999-9999";

console.log(regExp.test(telefone)); 