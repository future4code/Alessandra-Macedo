//-----------------------Exercícios de Strings e Arrays da aluna: Alessandra Ferreira--------------------------


//----------------------------------Exercícios de Intepretação de Código--------------------------------------

// 1 - Respostas:

/*a.  undefined
b.  null
c.  11
d.  3
e.  3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f.  9 */


// 2 - Respostas:

//SUBA NUM ONABUS EM MIRROCOS 27


//--------------------------------------Exercícios de escrita de Código---------------------------------------

/* 1 - Respostas:

const nomeDoUsuario = prompt("Digite seu nome?")
const emailDoUsuario = prompt("Digite seu e-mail?")

console.log("O email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem vinda(o)," + nomeDoUsuario + "!")*/

/* 2 - Respostas: 

a . 
const comidasPreferidas = ["churrasco", "lasanha", "panqueca", "almondengas", "camarão"]
console.log(comidasPreferidas)

b .
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

c .
const comidaPreferidaDoUsuario = prompt("Qual a sua comida preferida?")
comidasPreferidas[1] = comidaPreferidaDoUsuario
console.log(comidasPreferidas)
*/

// 3 - Respostas:
// a.
const listaDeTarefas = []
console.log(listaDeTarefas)

// b.
const primeiraTarefa = prompt("Digite a primeira tarefa?")
listaDeTarefas.push(primeiraTarefa)

const segundaTarefa = prompt("Digite a segunda tarefa?")
listaDeTarefas.push(segundaTarefa)

const terceiraTarefa = prompt("Digite a terceira tarefa")
listaDeTarefas.push(terceiraTarefa)

// c.
console.log(listaDeTarefas)

// d.
const indice = prompt("Insira um número que corresponda uma das suas tarefas realizadas: 0, 1 ou 2")
console.log(indice)

// e.
listaDeTarefas.splice(indice, 2)

// f.
console.log(listaDeTarefas)




//-------------------------------------------FIM------------------------------------------------------------