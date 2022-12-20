const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]


const convObj = e => JSON.parse(e)
const pegaPreco = e => e.preco

console.log(carrinho.map(convObj).map(pegaPreco))
