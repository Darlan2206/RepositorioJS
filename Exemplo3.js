//Utilizando '^' e '$' para solicitar que o objeto solicita esteja identico e não que só esteja presente.
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";

console.log(regExp.exec(telefone)); 