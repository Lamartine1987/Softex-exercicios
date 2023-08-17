var n = 10

for(i=n; i>=1; i--){
    if(i % 2 == 0){
        var divisao = i / 2;
        console.log(`${i} é divisível por 2: ${divisao}`)
    }else{
        var multiplicacao = (i * 3) + 1;
        console.log(`${i} multiplicado por 3 e somado com 1: ${multiplicacao}`)
    }
}