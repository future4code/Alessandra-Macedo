//----------------------Exercicios de Operadores da aluna: Alessandra Ferreira----------------------------//

//-----------------------Interpretação de Código----------------------------//

/* 1 - Respostas:
a - False
b - False 
c - True
d -  Boolean
*/

// 2- O problema é que não está somando e sim concatenando, teria primeiro que converter para Number, para da fazer a soma.
//    Vai aparecer o primeiro número juntamente com o segundo número digitado pelo usuario.


/* 3 -let primeiroNumero =  prompt ("Digite um numero!")
let segundoNumero = prompt ("Digite outro numero!")

console.log (Number (primeiroNumero) + Number(segundoNumero))
*/


//-----------------------Escrita de Codigo--------------------------------//

/* 1 - const idadeDoUsuario = prompt("Qual a sua idade?")
const idadeDoMelhorAmigo = prompt("Qual a idade do seu melhor amigo ou amiga?")

console.log(Number (idadeDoUsuario) > Number(idadeDoMelhorAmigo))*/

/* 2 - const numeroUmPar = prompt("insira um numero par?")
const numeroDoisPar = prompt("insira outro numero par?")


console.log(Number(numeroUmPar) % Number(numeroDoisPar));
console.log(resto === 0);*/


// 3 -
const idade = 15

const dias = idade * 365
const meses = dias / 30
const horas = dias * 24 

console.log(idade)

console.log(meses)
console.log(dias)
console.log(horas)


// 4 -
const primeiroNumero = prompt("Primeiro Número:");
const segundoNumero = prompt("Segundo Número:");

console.log(Number(primeiroNumero) > Number(segundoNumero));

console.log(Number(primeiroNumero) === Number(segundoNumero));

const resto = Number(primeiroNumero) % Number(segundoNumero);
console.log(resto === 0);


//--------------------------------FIM------------------------------------//