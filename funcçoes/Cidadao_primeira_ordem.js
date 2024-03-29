// funcao em js é frist-class object (citizens)

//criar funcao de forma literal

function fun1(){ }

//armazenar em uma variavel

const fun2 = function() {}

//armazenar em um array
const array = [function(a, b) {return a+b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar funcao com parametro

function run (fun){
  fun()
}

run (function(){ console.log('Executando...')})

//Uma funcao pode sertorna/conter uma funcao

function soma (a, b){
  return function(c){
    console.log(a + b +c)
  }
}

soma (2, 3)(4) //o resultado de soma é uma funcao, por isso se tem um segundo parênteses.

const cincoMais = soma(2,3)

cincoMais(4)