const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de plástico', preco: 12.49, fragil: false}
]

const ehFragil = produto => produto.fragil
const ehCaro = produto => produto.preco >= 500

console.log(produtos.filter(ehCaro).filter(ehFragil))
console.log(produtos)
