


function 
var mensagem = document.querySelector('#mensagem')
var divFoto = document.querySelector('#foto')
var imagem = document.querySelector('#imagem')
var hora = new Date().getHours()
var minutos = new Date().getMinutes()

if (minutos < 10) {
    mensagem.innerHTML = `Agora são ${hora}:0${minutos}`
} else {
    mensagem.innerHTML = `Agora são ${hora}:${minutos}`
}


