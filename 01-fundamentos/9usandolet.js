/*
* Aula 1 - usando let
* */

/*
let numero = 2
{
  let numero = 3
  console.log('Dentro do escopo: ', numero)
}
  console.log('Fora do escopo: ', numero)
*/

/*
* Aula 2 - usando let (laço de repetição)
* */

/*
// A variável existe fora do escopo com var
for (var i = 0; i < 10; i++) {
  console.log(i)
}
console.log('Fora: ', i)

// A variável NÃO existe fora do escopo com let
for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log('Fora: ', i) // vai dar erro!
*/

// Usando o var
const funcs = []
for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()


// Usando o let
const funcs2 = []
for (let i = 0; i < 10; i++) {
  funcs2.push(function() {
    console.log(i)
  })
}

funcs2[2]()

