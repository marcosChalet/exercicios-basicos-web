/*console.log('Aula 1 de funções!')
function imprimirSoma(a=0, b=0) {
  console.log(a+b)
}
imprimirSoma(2)

function somar(a, b=0) {
  return a + b
}
console.log(somar(10, 5))
*/
console.log('\nAula 2 de funções!')
// Armazenando uma função em uma variável

// Anônima
const impSoma = function (a, b) {
  console.log(a + b)
}
impSoma(2, 3)

// Arrow
const soma = (a, b) => {
  return a + b
}
console.log(soma(1,2))

// Arrow (com retorno implicito)
const sub = (a, b) => a - b
console.log(sub(5,4))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!! Usando arrow funcion')
