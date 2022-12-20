console.log('Aula 1')
const pessoa = {
  nome: 'Taldo',
  idade: 23,
  endereco: {
    logradouro: 'Maria Betania',
    numero: 123
  }
}

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, gentil = true} = pessoa
console.log(sobrenome, gentil)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/* Início do segundo vídeo sobre destructuring */
console.log('\nAula 2')
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

/* Início do terceiro vídeo sobre destructuring */
console.log('\nAula 3')

function rand({min=0, max=1000}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand({max:50, min:40}))
const obj = {max: 30, min:50}
console.log(rand(obj))

/* Início do quarto vídeo sobre destructuring */
console.log('\nAula 4')
function rand2([min=0, max=1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
}

console.log(rand2([200, 198]))
