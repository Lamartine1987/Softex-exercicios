const palavra = "Lamartine Cezar"
const vogais = "aeiou"

var contar = 0;

for(i=0; i <= palavra.length; i++){
    if(palavra.includes(vogais[i])){
        contar++;
    }
}

console.log(`Na palavra ${palavra} existem ${contar} vogais.`)