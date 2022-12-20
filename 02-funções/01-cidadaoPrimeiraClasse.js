// criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const arr = [function (a, b) {return (a + b)/2}, fun1, fun2]
console.log(arr[0](2,3))

// armazenar em um atributo de objeto
const obj = {
  nome: 'Maria',
  matricula: 40028922,
  n1: 5,
  n2: 8,
  nota: arr[0],
  strObj: function () {
    return `${this.nome}, ${this.matricula}, ${this.nota(this.n1, this.n2)}`
  }
}
obj.tostring = function () {
  return `${obj.nome}, ${obj.matricula}, ${obj.nota(obj.n1,obj.n2)}`
} 

//obj.tostring = function () {return `${obj.nome}`}

console.log(obj.nota(4, 3))
console.log(obj.tostring())
console.log(obj.strObj())

console.log('\n-=-=-=-=-=-=-=-=-=-=-=-\n')

// passar função como parâmetro
function run(fun) {
  fun()
}
run(function (){console.log('Executando...') })

// uma função pode retornar/conter uma outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(2,3)(4);
