//--------------------Exercícios de Objetos aluna: Alessandra Ferreira--------------------


//--------------------Exercícios de Interpretação de Código--------------------


//1)
//a) O que vai ser impresso no console?

//"Matheus Nachtergaele"
//"Virginia Cavendish"
//{canal: "Globo", horario: "14h"}


//2)
//a) O que vai ser impresso no console?

//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//Cria uma copia do elemento do objeto descrito na sintaxe.


//3)
//a) O que vai ser impresso no console?

//False
//Undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

//O primeiro console deu False, porque já era o valor definido na propriedade do objeto, já no segundo console 
//deu undefined porque nem mesmo existia a chave altura.




//--------------------Exercícios de Escrita de Código--------------------


//1) Resolva os passos a seguir:

//a)Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá 
//exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma 
//mensagem no modelo abaixo: 

//Exemplo de entrada

const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
};

//Exemplo de saída
function pessoa1(objeto) {
console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)}

pessoa1(pessoa)


//b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como 
//argumento o novo objeto


const mudarApelidos = {...pessoa, apelidos: [
    "Ma", "Mands", "Manda"
]}
pessoa1(mudarApelidos)




//2. Resolva os passos a seguir: 
    
//  a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

const pessoa1 = {
    nome:"Alessandra",
    idade: 27,
    profissao: "Estudante"
}

//b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`

function minhaFuncao(usuario) {
    const resultado = [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]
	// desenvolver sua logica
    return resultado
}

function minhaFuncao1(pessoa1) {
    const resultado = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    return resultado
}
console.log(minhaFuncao(pessoa))
console.log(minhaFuncao1(pessoa1))



//3. Resolva os passos a seguir: 
    
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho.        

const carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
//propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}


const fruta2 = {
    nome: "uva",
    disponibilidade: true
}


const fruta3 = {
    nome: "mexerica",
    disponibilidade: true
}

//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
//Invoque essa função passando os três objetos criados. 

function frutasNoCarrinho(fruta) {
    carrinho.push(fruta)
}

frutasNoCarrinho(fruta1)
frutasNoCarrinho(fruta2)
frutasNoCarrinho(fruta3)


//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.

console.log(carrinho)


//--------------------Desafios--------------------


//1) Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console 
//um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para 
//garantir que é um objeto.


function informacoesDeUsuario() {
  const informacoes = {
    nome: prompt("Digite o seu nome?"),
    idade: prompt("Digite a sua idade?"),
    profissao: prompt("Digite a sua profissao?")

};
console.log(informacoes)
console.log(typeof informacoes)
}
informacoesDeUsuario()

