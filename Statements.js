var text = 'Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais.';

var HackerTextError = function(message){
    this.message = message;
    this.name = "HackerTextError";
};

 var toHackerCase = function(text) {
    
    if (!text) {throw new HackerTextError("Invalid text.")};
    if (typeof text !== "string") throw new HackerTextError("Invalid type.");
    var hackerTextArray = [];
    var i = 0; 
    while ( i < text.length) {
      
    switch(text.charAt(i)){
         case 'o':
         hackerTextArray.push(0);
         break;
         case 'l':
         hackerTextArray.push(1); 
         break;
         case 'e':
         hackerTextArray.push(3);
         break;
         case 'a':
         hackerTextArray.push(4);
         break;
         case 's':
         hackerTextArray.push(5);
         break;
         case 't':
         hackerTextArray.push(7);
         break;
         default:
         hackerTextArray.push(text.charAt(i));
        }
         i++;
    }
    return hackerTextArray.join("");
};
try{
    console.log(toHackerCase());
} catch (e) { 
    console.log("Error:" + e.message + " " + e.name);
    try{
        console.log(toHackerCase(10));
    } catch (e) { 
        console.log("Error:" + e.message + " " + e.name);
}

console.log(toHackerCase(text));
console.log(toHackerCase());

}
