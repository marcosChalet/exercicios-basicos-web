const valores = [7.7, 3.2, 9.9, "marcos"]

console.log(valores)
console.log(valores[0], valores[2])
console.log(valores[5])

valores[10] = "Taldo"
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, null, undefined, NaN, false)
console.log(valores)

valores.pop()
valores.pop()
valores.pop()
valores.pop()
valores.pop()
console.log(valores)
