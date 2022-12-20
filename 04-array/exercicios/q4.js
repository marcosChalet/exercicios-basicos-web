function mesAno(num) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 
                 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                 'Outubro', 'Novembro', 'Dezembro']

  return meses[--num]
}

console.log(mesAno(11))
