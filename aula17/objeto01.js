var amigo = {nome: 'Guilherme', 
idade: 19, 
peso: 53.2, 
engordar(p){
    this.peso += 2
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);