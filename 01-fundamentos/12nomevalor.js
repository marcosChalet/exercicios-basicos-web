// Par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' // contexto léxico 2
  return saudacao
}

/**
  * Objetos sõa grupos aninhados de pares nome/valor
  **/

const cliente = {
  nome: 'Marcos',
  idade: 21,
  peso: 80,
  endereco: {
    logradouro: 'Rua Taldo José',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
