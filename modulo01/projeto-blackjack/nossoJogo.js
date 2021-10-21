/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo(a) ao jogo de Blackjack!")

const comecarJogo = confirm("Quer iniciar uma nova rodada")

   if (comecarJogo) {
  const sortearCartaUsuario1 = comprarCarta()
  const sortearCartaUsuario2 = comprarCarta()
  const sortearCartaComputador1 = comprarCarta()
  const sortearCartaComputador2 = comprarCarta()

  const pontosDoUsuario = sortearCartaUsuario1.valor + sortearCartaUsuario2.valor
  const pontosDoComputador = sortearCartaComputador1.valor + sortearCartaComputador2.valor

  console.log(`Usuário - cartas: ${sortearCartaUsuario1.texto} ${sortearCartaUsuario2.texto} - ${pontosDoUsuario}`)
  console.log(`Computador - cartas: ${sortearCartaComputador1.texto} ${sortearCartaComputador2.texto} - ${pontosDoComputador}`)

if (pontosDoUsuario > pontosDoComputador) {
   console.log("O usuário ganhou!!!")
} else if (pontosDoComputador > pontosDoUsuario) {
   console.log('O computador ganhou!')
 } else if (pontosDoUsuario === pontosDoComputador) {
   console.log('Empate!')
 } 
 } else {
   console.log('O Jogo acabou') }
 