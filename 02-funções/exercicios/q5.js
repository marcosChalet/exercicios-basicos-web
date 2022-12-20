function func (a) {
  const result = a.toFixed(2)
  console.log(`R$${result.replace('.', ',')}`)
}

func(0.1 + 0.2)
