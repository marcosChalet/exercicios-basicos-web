const cumprimentar1 = msg => 'olá, '.concat(msg, '!')
function cumprimentar2(nome) {
  const saudacao = "olá"
  return [saudacao, nome].join(', ').concat('!')
}

console.log(cumprimentar1('Marcos'))
console.log(cumprimentar2('Marcos'))
