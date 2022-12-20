function tratarErroELancar(erro) {
  throw new Error('...')
  // thow 10
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e) 
  } finally {
    console.log('final')
  }
}

const obj = {name: "marcos"}
imprimirNomeGritado(obj)
