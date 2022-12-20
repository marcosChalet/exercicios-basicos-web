// Notação literal
const ob1 = { }
console.log(ob1)

// Obj em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criaFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

f1 = criaFuncionario('João', 7980, 4)
f2 = criaFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// Json: Função famosa que retora um objeto ...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)


