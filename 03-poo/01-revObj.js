// É uma coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica' // melhor fugir disso
produto.preco = 220

delete produto.nome
delete produto['marca do produto']

console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Júnior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calculaValorSeguro: function() {
    // ... //
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

console.log('\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n')

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
