var posicaoAnterior = 0
var posicaoAtual = 1

for(i=3; i<=10; i++){
    var proximo = posicaoAnterior + posicaoAtual
    console.log(proximo)
    posicaoAnterior = posicaoAtual
    posicaoAtual = proximo
}