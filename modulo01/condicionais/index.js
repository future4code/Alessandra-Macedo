/*--------------------Exercício de Condicionais aluna: Alessandra Ferreira--------------------

--------------------Exercícios de Interpretação de Códigos--------------------

 1)
a) De acordo com a parte do código: if (numero % 2 === 0). Quando verificamos se o
resto da divisão de um número é igual a 0, estamos verificando se esse número é par ou impar.


b) Números pares


c) Números impares


 2) 
a) Para verificar o preço de uma fruta no supermercado.


b) "O preço da fruta maça é  R$ 2,25"


c) O Nosso preço passa a ser o último que é o DEFAULT, que é 5 reais.


 3)
a) Pedindo um número para o usuario usando o prompt e convertendo para Number e guardando numa variavel.


b) Se for 10: Esse número passou no teste e dá algum tipo de erro, já se for -10: somente da o erro.


c) Sim, a variavel mensagem foi criada dentro do bloco do if e não tem como ser acessada pelo escopo global.
 

//--------------------Exercícios de Escrita de Código--------------------
*/
//1) a.
const idadeDoUsuario = prompt('Digite a sua idade?')

//b.
const transformandoEmNumero = Number(idadeDoUsuario)

//c.
if (idadeDoUsuario >= 18) {
  console.log('Você pode dirigir!')
} else {
  console.log('Você não pode dirigir!')
}

// 2)
const horarioDeEstudo = prompt(
  'Digite seu período: M (Matutino), V (Vespertino) ou N (Noturno):'
)
if (horarioDeEstudo === 'M') {
  console.log('Bom dia!')
} else if (horarioDeEstudo === 'V') {
  console.log('Boa tarde!')
} else if (horarioDeEstudo === 'N') {
  console.log('Boa noite!')
} else {
  console.log('Falhou')
}

// 3)
const horarioDeEstudo = prompt(
  'Digite seu período: M (Matutino), V (Vespertino) ou N (Noturno):'
)
switch (horarioDeEstudo) {
  case 'M':
    console.log('Bom dia!')
    break
  case 'V':
    console.log('Boa tarde!')
    break
  case 'N':
    console.log('Boa noite!')
    break
  default:
    console.log('Falhou')
    break
}

// 4)
const generoDeFilme = prompt('Digite qual o genero do filme ?')
const precoDoIngresso = prompt('Digite qual o valor do ingresso?')

if (generoDeFilme === 'fantasia' && precoDoIngresso <= 15) {
  console.log('Bom filme!')
} else {
  console.log('Escolha outro filme!')
}

//--------------------Desafios-------------------

// 1)
const generoDeFilme = prompt('Digite qual o genero do filme ?')
const precoDoIngresso = prompt('Digite qual o valor do ingresso?')

if (generoDeFilme === 'fantasia' && precoDoIngresso <= 15) {
  const lanchinho = prompt('Qual lanchinho você vai querer?')
  console.log('Bom filme!')
  console.log(`Aproveite o seu lanche ${lanchinho}`)
} else {
  console.log('Escolha outro filme: (')
}
