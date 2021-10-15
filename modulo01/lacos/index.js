//--------------------Exercícios de Laços aluna: Alessandra Ferreira--------------------

//--------------------Exercícios de Interpretação de Código--------------------

//1. Está somando o valor da váriavel mais o valor de i, ele vai fazer o calculo enquanto i for menor que 5, usando o i++ e aumentando 1 a cada volta do loop. O resultado impresso no console vai ser 10.

//2. a) 19, 21, 23, 25, 27 e 30.

//b)
/*
i = 0
let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 9) {
    console.log(numero, 'indice', i)
  }
  i++
}

//Primeiro eu deixei o indice no 0, e para pegar o indice de todos os valores dessa sintaxe coloquei no if
// numero > 9, depois coloquei o incremento do indice no final .
*/

/*3)
 *
 **
 ***
 ****
Acontece o loop da sintaxe dependendo da quantidade digitadada pelo usuario vai acontecer um calculo do incremento somando o valor do usuario com o asterisco.



//--------------------Exercícios de Escrita de Código--------------------



1.
const bichinhosDeEstimacao = prompt('Quantos bichinhos de estimação você tem?')

a)
if (bichinhosDeEstimacao <= 0) {
  console.log('Que pena! Você pode adotar um pet!')

  b)
} else if (bichinhosDeEstimacao > 0) {
  const quantidadeDeBichinhos = []
  for (let i = 0; i < bichinhosDeEstimacao; i++) {
    quantidadeDeBichinhos.push(prompt('Qual o nome dos bichinhos?'))
  }

  c)
  console.log(quantidadeDeBichinhos)
}

///////////////////////////////////////////////////////////////////////////////////

*/
//2.
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//a)
function imprimirArrayOriginal(arrayOriginal) {
  for (let valorOriginal of arrayOriginal) {
    console.log(valorOriginal)
  }
}
imprimirArrayOriginal(arrayOriginal)

///////////////////////////////////////////////////////////////////////////////

//b)
function imprimirArrayOriginal(arrayOriginal) {
  for (let valorOriginal of arrayOriginal) {
    console.log(valorOriginal / 10)
  }
}
imprimirArrayOriginal(arrayOriginal)

//////////////////////////////////////////////////////////////////////////////

//c)
function imprimirArrayOriginal(arrayOriginal) {
  const numerosPares = []
  for (let valorOriginal of arrayOriginal) {
    if (valorOriginal % 2 === 0) {
      numerosPares.push(valorOriginal)
    }
  }
  console.log(numerosPares)
}

imprimirArrayOriginal(arrayOriginal)

//////////////////////////////////////////////////////////////////////////////

//d)
function arrayDeStrings(arrayOriginal) {
  let imprimirStrings = []
  let indice = 0
  for (let valordoArray of arrayOriginal) {
    imprimirStrings.push(`O elemento do índex ${indice} é: ${valordoArray}`)
    indice++
  }
  console.log(imprimirStrings)
}
arrayDeStrings(arrayOriginal)

//////////////////////////////////////////////////////////////////////////////

//e)
function colocarMaiorNumero(arrayOriginal) {
  let maiorNumero = 0
  let menorNumero = Infinity
  for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] < menorNumero) {
      menorNumero = arrayOriginal[i]
    } else if (arrayOriginal[i] > maiorNumero) {
      maiorNumero = arrayOriginal[i]
    }
  }
  console.log('O maior número é:', maiorNumero)
  console.log('O menor número é:', menorNumero)
}
colocarMaiorNumero(arrayOriginal)
