Array.prototype.filter2 = function (callback) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && newArr.push(this[i])
  }

  return newArr
}

const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de plástico', preco: 12.49, fragil: false}
]

const ehFragil = produto => produto.fragil
const ehCaro = produto => produto.preco >= 500

console.log(produtos.filter2(ehCaro).filter2(ehFragil))
console.log(produtos)

