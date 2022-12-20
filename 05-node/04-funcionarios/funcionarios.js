const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = pessoa => pessoa.pais === 'China'
const mulheres = pessoa => pessoa.genero === 'F'
const menorSalario = (a, b) => a.salario < b.salario ? a : b

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

  console.log(func)
})

