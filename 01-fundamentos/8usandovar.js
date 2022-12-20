 /*
  * console.log('Usando var: aula 1')
  *
  * Usando o var para declarar uma variável, ela irá para o escopo global
  * que é, no node, chamado de global (window no browser).
  *
  * Quando criada dentro de uma função, o escopo fica limitado a própria
  * função.
  *
  * */

 /*
  * console.log('Usando var: aula 2')
  * */

var numero = 1
{
  var numero = 2
  console.log('Dentro do escopo: ', numero)
}
console.log('Fora do escopo: ', numero)
