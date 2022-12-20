const contadorA = require('./05-instanciaUnica')
const contadorB = require('./05-instanciaUnica')

const contadorC = require('./05-instanciaNova.js')()
const contadorD = require('./05-instanciaNova.js')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)


