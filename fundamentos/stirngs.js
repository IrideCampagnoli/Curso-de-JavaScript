const escola = "cod3r"


//obs : os arrays começam em zero ('0')
console.log(escola)
console.log(escola.charAt(4)) //pega o elemento na 4 posição
console.log(escola.charCodeAt(3)) //pega o numero ASCII do elemnento na posição 3
console.log(escola.indexOf('r')) // da o local no array

console.log(escola.substring('2')) //cria uma string que começa a partir da posição 2
console.log(escola.substring(0,3)) //cria uma string que começa na posição 'zero' e tem 3 caracteres

console.log('Escola '.concat(escola).concat('!')) // concatena strings
console.log(escola.replace('o', 'f')) //troca o primeiro elemento pelo segundo... os elementos podem se char ou numeros.


console.log('Ana, Maria, Pedro'.split('n'))
console.log('Ana, Maria, Pedro'.split(','))
//criam arrays a partir que serao separadas a partir do elemento dentro da funcao split