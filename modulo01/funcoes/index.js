//----------------Exercícios de Funções aluna: Alessandra Ferreira----------------


/*------------------Exercícios de leitura de Código-------------------------------



//1.  a) O que vai ser impresso no console?
// 10 e 50

//b) O que aconteceria se retirasse os dois console.log e 
simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? 
O que apareceria no console?

Não apareceria nada no console, pois foi retirado da função.

*/

//2. a. Explique o que essa função faz e qual é sua utilidade.
//Primeiro ele pede que o usuario deigite um texto, depois ela faz uma 
//comparação com o valor e usando tambem o tolowecase que fazm com que 
//a letra seja minuscula.

/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra
     

     i. True
     ii. True
     iii. True
*/
/*


//------------------------Exercícios de escrita de Código-----------------------------------------------


1. a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
algumas informações sobre você:


function imprimeInformacoes() {
    console.log("Me chamo Alessandra, tenho 28 anos, sou de Brasilia e sou estudante da Labenu")
}
imprimeInformacoes()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome 
(string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string 
que unifique todas as informações da pessoa em uma só mensagem com o template:


const dadosPessoais = function (nome, idade, cidade, profissao){
const dadosUsuario =  `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
return dadosUsuario
}
const frasePessoal = dadosPessoais("Alessandra", 28, "Brasilia", "Estudante")
console.log(frasePessoal)

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima 
no console o resultado.
*/

function somaDoisNumeros(primeiroNum, segundoNum) {
    const soma = primeiroNum + segundoNum
     return soma
}

 console.log(somaDoisNumeros(5,8))
 

/*
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
primeiro número é maior ou igual ao segundo.
*/


function recebeDoisNumeros(primeiroNumero, segundoNumero) {
    const maiorOuIgual = primeiroNumero >= segundoNumero
    return maiorOuIgual
}

console.log(recebeDoisNumeros(5, 8))

/*
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
*/


function receberNumero(receberNumero1, receberNumero2){
    const devolvaBoleano = receberNumero1 % receberNumero2 === 0
    return devolvaBoleano
} 
console.log(receberNumero(20, 20))



/*
d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho 
dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

function imprimeMensagem(mensagem){
    console.log("Tamanho da mensagem:", mensagem.length)
    console.log(mensagem.toUpperCase())

}

imprimeMensagem("Exercícios de funçoes pronto!")


/*
3.  Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
inputados pelo usuário 
sendo o argumento. Por fim, mostre no console o resultado das operações:
*/
const num1 = Number(prompt("Digite o primeiro número:"))
    const num2 = Number(prompt("Digite o segundo número:"))

function somar(num1, num2){    
    const soma = num1 + num2
    return soma
}

function subtrair(num1, num2){
    const diferenca = num1 - num2
    return diferenca
}

function multiplicar(num1, num2){
    const multiplicação = num1 * num2
    return multiplicação
}

function dividir(num1, num2){
    const divisao = num1 / num2
    return divisao
}

console.log("Soma:", somar(num1, num2))
console.log("Diferença:",subtrair(num1, num2))
console.log("Multiplicação", multiplicar(num1, num2))
console.log("Divisão:", dividir(num1, num2))











