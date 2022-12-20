let lst = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function avaliaPontuacoes (strPontuacoes) {
  let pontuacoes = strPontuacoes.split(", ")
  let qtdQuebraRecord = 0
  let piorJogo = 1

  let maiorPontuacao = pontuacoes[0]
  let menorPontuacao = pontuacoes[0]

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i]
      qtdQuebraRecord++
    }else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i]
      piorJogo = i + 1
    }
  }
  return [qtdQuebraRecord, piorJogo]
}

console.log(avaliaPontuacoes(lst))
