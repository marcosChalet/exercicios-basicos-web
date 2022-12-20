const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x) {
  console.log(`${indice + 1} ${nome}`)
  // console.log(array)
  // console.log(x) // Undefined
})


console.log('\n-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-\n')


aprovados.forEach(nome => console.log(nome))


console.log('\n-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-\n')


const exibirAprovados = aprovado => {console.log(aprovado)}
aprovados.forEach(exibirAprovados)








