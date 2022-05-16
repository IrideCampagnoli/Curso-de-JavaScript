const prod1 = {} //par de chaves caracteriza um objeto
prod1.nome = 'Celular Ultra Mega'

// objetos são chave + valor

prod1.preco = 4998.90
prod1['Desconto_Legal'] = 0.40 //evite atributos com espaço

console.log(prod1) 

const prod2 = {
  nome : 'Camisa Polo',
  preco: 79.90,
  obj:{
    blablabla: 1,
    obj:{
      blablabla: 2
    }
  }
}

console.log(prod2)