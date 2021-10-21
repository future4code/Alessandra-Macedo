// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let inverterArray = []
  for (let i = array.length - 1;i >= 0;i--) {
    inverterArray.push(array[i])
  }
  return inverterArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arrayOrdenado = array.length
  for (let i = 0;i < arrayOrdenado;i++) {
    for (let j = 0;j < arrayOrdenado;j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let i = 0;i < array.length;i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i])
    }
  }
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let paresElevadosDois = []
  for (let i = 0;i < array.length;i++) {
    if (array[i] % 2 === 0) {
      paresElevadosDois.push(array[i] * array[i])
    }
  }
  return paresElevadosDois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (let i = 0;i < array.length;i++) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const retornaPar = []
  for (let number = 0;retornaPar.length < n;number++) {
    if (number % 2 === 0) {
      retornaPar.push(number)
    }
  }
  return retornaPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA !== ladoB && ladoB !== ladoC) {
    return 'Escaleno'
  } else if (ladoA === ladoB && ladoB === ladoC) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const retornaFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  let atoresConcat = ""
  for (let i = 0;i < retornaFilme.atores.length;i++) {
    if (i === retornaFilme.atores.length - 1) {
      atoresConcat += retornaFilme.atores[i]
    } else {
      atoresConcat += retornaFilme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${retornaFilme.nome}, de ${retornaFilme.ano}, dirigido por ${retornaFilme.diretor} e estrelado por ${atoresConcat}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for (const pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
  for (const pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.forEach((conta) => {
    let totalDeCompras = 0
    conta.compras.forEach((valor) => {
      totalDeCompras += valor
    })
    conta.saldoTotal -= totalDeCompras
  })
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  for (let i = 0;i < consultas.length;i++) {
    for (let j = 0;j < consultas.length - i - 1;j++) {
      if (consultas[j].nome > consultas[j + 1].nome) {
        const temp = consultas[j]
        consultas[j] = consultas[j + 1]
        consultas[j + 1] = temp
      }
    }
  }
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  for (let i = 0;i < consultas.length;i++) {
    for (let j = 0;j < consultas.length - i - 1;j++) {

      const arrayData1 = consultas[j].dataDaConsulta.split('/')
      const dia1 = Number(arrayData1[0])
      const mes1 = Number(arrayData1[1])
      const ano1 = Number(arrayData1[2])

      const arrayData2 = consultas[j + 1].dataDaConsulta.split('/')
      const dia2 = Number(arrayData2[0])
      const mes2 = Number(arrayData2[1])
      const ano2 = Number(arrayData2[2])

      const data1 = new Date(ano1, mes1 - 1, dia1).getTime()
      const data2 = new Date(ano2, mes2 - 1, dia2).getTime()

      if (data1 > data2) {
        const temp = consultas[j]
        consultas[j] = consultas[j + 1]
        consultas[j + 1] = temp
      }
    }
  }
  return consultas
}