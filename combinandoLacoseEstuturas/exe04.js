const prompt = require("prompt-sync")();

let numero = prompt("Digite um número para saber se ele é primo: ");

function numeroPrimo(num){
    for(i=2; i < num; i++){
        if(num % i === 0){
            return(console.log(`O número ${num} não é primo.`));
        }
    }
    console.log(`O número ${num} é primo.`)
}

numeroPrimo(numero);