//--------------------Exercícios de Funções de Array--------------------

//--------------------Exercícios de Interpretação de Código--------------------

/*
1. a) nome: "Amanda Rangel", apelido: "Mandi" }, 0,
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Laís Petra", apelido: "Laura" }, 1, 
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Letícia Chijo", apelido: "Chijo" }, 2,
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

//////////////////////////////////////////////////

2. a) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


///////////////////////////////////////////////////

3. a) { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },



//--------------------Exercícios de Escrita de Código--------------------

//1
const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]


//a)
//const nomeDosDoguinhos = pets.map(item => {
// return item.nome
//})
//console.log('Item A', nomeDosDoguinhos)

//b)
//const apenasSalsicha = pets.filter(dog => {
// return dog.raca === 'Salsicha'
//})
//console.log('Item B', apenasSalsicha)

//c)
//const somentePoodles = pets.filter(cachorro => {
//return cachorro.raca === 'Poodle'
//})
//const cupons = somentePoodles.map(doguinho => {
//return `Você ganhou um cupom de desconto de 10% para tosar o/a ${doguinho.nome}.`
//})
//console.log('Item C', cupons)

//////////////////////////////////////////////////
*/
//2.
const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

//a)
const nomeDosProdutos = produtos.map(item => {
  return item.nome
})
console.log('Item A', nomeDosProdutos)

//b)
const descontoDosProdutos = produtos.map(desconto => {
  return { nome: desconto.nome, preco: desconto.preco * 0.95 }
})
console.log('Item B', descontoDosProdutos)

//c)
const apenasBebidas = produtos.filter(bebidas => {
  return bebidas.categoria === 'Bebidas'
})
console.log('Item C', apenasBebidas)

//d)
const apenasYpe = produtos.filter(produtos => {
  return produtos.nome.includes('Ypê')
})
console.log('Item D', apenasYpe)

//e
const CompreYpe = apenasYpe.map(produtosYpe => {
  return `Compre ${produtosYpe.nome} por ${produtosYpe.preco}`
})
console.log('Item E', CompreYpe)
