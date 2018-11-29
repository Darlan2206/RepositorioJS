// Atribuir um quantificador que aceita de 8 a 9 digitos no total para a utilização do 9 adcional. 
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

var telefone1 = "(48) 9979-1234";
console.log(regExp.test(telefone1)); 

var telefone2 = "(11) 92525-4585";
console.log(regExp.test(telefone2)); 