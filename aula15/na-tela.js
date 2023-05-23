var array = [2, 7, 5, 8, 6, 4, 1]

//console.log(array);

/*
for (let posicao = 0 ; posicao <= array.length ; posicao ++ ) {
    console.log(`A posição ${posicao} dentro do array tem o valor ${array[posicao]}`);
} */

for (let posicao in array) {
    console.log(`A posção ${posicao} dentro do array tem o valor ${array[posicao]}`);
}