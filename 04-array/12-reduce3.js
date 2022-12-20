Array.prototype.reduce2 = function(callback) {
  let ac = this[0]
  for (let i = 1; i < this.length; i++) {
    ac = callback(ac, this[i], i, this)
  }
  return ac
}

const alunos = [
  {nome: 'João', nota: 7.3, bolsista: true}, 
  {nome: 'Maria', nota: 9.2, bolsista: true}, 
  {nome: 'Pedro', nota: 9.8, bolsista: true}, 
  {nome: 'Ana', nota: 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const algumBolsista  = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))


const soma = (total, valor) => total + valor
const valores = [1,2,3,4,5,6]

console.log(valores.reduce2(soma))
console.log(valores.reduce(soma))

