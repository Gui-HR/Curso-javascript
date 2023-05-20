
function carregarPagina() {
    var body = document.querySelector('body')
    var horaMensagem = document.querySelector('#hora-mensagem')
    var bomMensagem = document.querySelector('#bom-mensagem')
    var imagem = document.querySelector('#imagem')
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    if (minutos < 10) {
        horaMensagem.innerHTML = `Agora são ${hora}:0${minutos}`
    } else {
        horaMensagem.innerHTML = `Agora são ${hora}:${minutos}`
    }

    if (hora >= 8 && hora <= 12) {
        bomMensagem.innerText = 'Bom Dia!'
        imagem.src = 'img/manha.jpg'
        body.style.backgroundColor = '#ee8a51'
    } else if (hora > 12 && hora <= 18) {
        bomMensagem.innerText = 'Boa Tarde!'
        imagem.src = 'img/tarde.jpg'
        body.style.backgroundColor = '#ff6145'
    } else {
        bomMensagem.innerText = 'Boa Noite!'
        imagem.src = 'img/noite.jpg'
        body.style.backgroundColor = '#2c3b42'
    }
}




