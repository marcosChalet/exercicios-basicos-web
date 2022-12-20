const notas = [7.5, 8.0, 9.4, 10, 3.5, 1.2]

for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Macedo',
  idade: 28,
  peso: 58.5
}

for (let atribruto in pessoa) {
  console.log(`${atribruto} = ${pessoa[atribruto]}`)
}
