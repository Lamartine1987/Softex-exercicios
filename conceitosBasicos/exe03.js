const prompt = require("prompt-sync")();

let temperatura = parseFloat(prompt("Digite a temperatura que deseja converter °F: "))

function conversaoTemperatura(temp){
    let conversao = (temp * (9/5) + 32).toFixed(2);
    console.log(`Temperatura em Fahrenheit: ${conversao}°`);
}

conversaoTemperatura(temperatura);