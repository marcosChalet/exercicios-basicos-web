let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a


let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'

// Aula 2
console.log('\n-=-=-=-=-=-=-=-=-=-=-\n')

function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}
// new Pessoa


// Aula 3
console.log('\n-=-=-=-=-=-=-=-=-=-=-\n')

let comparaComThis = function(param) {
  console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('****************')

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
