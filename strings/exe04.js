const palavra = "Ola mundo";
const letra = "a";
count = 0;

for(i=0; i <= palavra.length; i++){
    if(letra.includes(palavra[i])){
        count++
    }
}

console.log(`Existe ${count} letra '${letra}' na frase ${palavra}.`);