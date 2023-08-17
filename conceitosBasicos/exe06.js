palavra = "hello"

function imprimir(word){
    var separacaoDasLetras = word.split("")
    var inversaoDasLetras = separacaoDasLetras.reverse()
    var juntandoAsLetrasInvertidas = inversaoDasLetras.join("");
    console.log(juntandoAsLetrasInvertidas);
}

imprimir(palavra)