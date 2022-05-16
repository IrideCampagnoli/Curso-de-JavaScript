let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //negação da negação
console.log(!isAtivo) //negação 
//isos serve para saber se um valor diferente de true e false são verdadeiros ou falsos

console.log('os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'tEXT')
console.log(!![])
console.log(!!{})
console.log(!!Infinity) 
console.log(!!(isAtivo =true))// é se o valor que foi atribuido é verdadeiro 

console.log('os falsos....')
console.log(!!0)
console.log(!!'')//vazio
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))
console.log(!!(isAtivo=false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido') //operação lógica

nome = 'Lucas'

console.log(nome || 'Desconhecido')