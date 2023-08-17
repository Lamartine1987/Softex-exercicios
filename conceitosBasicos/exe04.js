arrayNumeros = [10,10,10,10,20];
soma = 0;

function media(lista){
    lista.forEach(numero => {
        soma += numero;
    });

    resultado = soma / lista.length;
    console.log("Média: ", resultado);
}

media(arrayNumeros);