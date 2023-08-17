listaNumeros = [2,10,5,5,6,4,2,4,1]
novaLista = []


listaNumeros.filter(function(numero, index){
    if(listaNumeros.indexOf(numero) == index){
        novaLista.push(numero);
    }
})


console.log(novaLista)

