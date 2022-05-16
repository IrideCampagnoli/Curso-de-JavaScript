const valores=[7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] =10
console.log(valores)
console.log(valores.length) //diz quantos elementos estao no array

valores.push({id: 3}, false, true, 'teste') //push adiciona novos elementos ao final do array
console.log(valores)

console.log(valores.pop())//a funcao pop retira e retorna o ultimo valor do array
delete valores[0] //retira o valor da posicao zero do array
console.log(valores)

console.log(typeof valores) //arrays são do tipo objetos