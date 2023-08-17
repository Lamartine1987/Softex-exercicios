listaDeNumeros = [2,20,15,10,8,1]
atual = 0
numeroAnterior = 0
numeroPosteiror = 0

for(i=0; i <= listaDeNumeros.length; i++){
    for(j=0; j < listaDeNumeros.length - i -1; j++){
        if(listaDeNumeros[j] < listaDeNumeros[j+1]){
            atual = listaDeNumeros[j]
            listaDeNumeros[j] = listaDeNumeros[j+1]
            listaDeNumeros[j+1] = atual
        }
    }
}

console.log(listaDeNumeros)