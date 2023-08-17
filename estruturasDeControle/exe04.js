const prompt = require('prompt-sync')()

const numero1 = parseFloat(prompt("Digite o 1° número: "))
const numero2 = parseFloat(prompt("Digite o 2° número: "))
console.log("\nMenu de operações: \n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n")
const operacao = parseInt(prompt("Escolha a operação: "))
switch(operacao){
    case 1:
        console.log("Soma:", numero1 + numero2);
        break;
    case 2: 
        console.log("Subtração:", numero1 - numero2);
        break;
    case 3:
        console.log("Multiplicação:", numero1 * numero2);
        break;
    case 4:
        console.log("Divisão:", numero1 / numero2);
        break;
    default:
        console.log("Essa opção não é possível.")
}
