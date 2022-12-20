const modulaA = require('../../01-moduloA.js')
console.log(modulaA.ola)

const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)
