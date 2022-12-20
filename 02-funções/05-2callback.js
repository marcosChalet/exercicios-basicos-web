const notas = [6.6, 4.3, 8.7, 9.8, 9.6, 4.8, 9.7, 7.6, 7.2]

// sem callback
const notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)


// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)
