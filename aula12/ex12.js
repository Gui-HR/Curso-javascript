
var hora = new Date().getHours()
var minutos = new Date().getMinutes()

if (minutos < 10) {
    console.log(`Agora são exatamente ${hora}:0${minutos}`)
} else {
    console.log(`Agora são exatamente ${hora}:${minutos}`)
}

if (hora >= 5 && hora <= 12) {
    console.log('Bom Dia!');
} else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde!');
} else if (hora >= 18 || hora < 5) {
    console.log('Boa noite');
}