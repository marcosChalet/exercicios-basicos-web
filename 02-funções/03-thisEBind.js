const pessoa = {
  saudacao: 'Bom dia!',
  falar: function () {
    console.log(this.saudacao)
  }
}

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// this e bind - vídeo 2
console.log('\n-=-=-=-=-=-=-=-=-=-=-=-\n')
function Pessoa() {
  this.idade = 0
  const self = this

  // pode usar o bind ou deixar uma variável constante apontando
  // para o this (self)
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa
