var array = [7, 12, 13, 10, 25, 2]

array.sort()
array.push(4)
array[10] = 1

console.log(array);
console.log(`O array tem ${array.length} posições`);
console.log(`A quinto numero é o ${array[4]}`);

var posicao = array.indexOf(3)
console.log(`Esta na posição ${posicao}`);