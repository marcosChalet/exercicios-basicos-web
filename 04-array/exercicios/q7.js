function repetir(val, qtdVezes) {
  const lst = []
  for (let i = 0; i < qtdVezes; i++) {
    lst.push(val)
  }
  return lst
}

console.log(repetir(3,5))
