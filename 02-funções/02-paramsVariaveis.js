// Forma anterior ao es2015
function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}
console.log(soma(1,3,4,5))


