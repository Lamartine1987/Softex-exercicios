numeros = [9,5,3,82,7,15,1]

numeroMaior = 0

numeros.forEach(element => {
    if(element >= numeroMaior){
        numeroMaior = element
    }
});

console.log("Maior número: ", numeroMaior)