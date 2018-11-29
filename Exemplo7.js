// Flexibilizar a consdição utilizando o quantificador " ? " para aceitar a presença ou a falta do ífem entre os quartetos do telefone.
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
  
var telefone1 = "(48) 99791234";
console.log(regExp.test(telefone1)); 

var telefone2 = "(11) 92525-4585";
console.log(regExp.test(telefone2)); 