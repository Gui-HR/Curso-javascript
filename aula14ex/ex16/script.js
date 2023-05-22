
var botao = document.querySelector('#botao')
botao.addEventListener('click', resultado)

function resultado() {
    var resposta = document.querySelector('#p-resposta')
    var nInicio = Number(document.querySelector('#inicio').value)
    var nFim = Number(document.querySelector('#fim').value)
    var nPasso = Number(document.querySelector('#passo').value)
    resposta.innerHTML = ''

    for (var i = nInicio ; i <= nFim ; i += nPasso) {
        resposta.innerHTML += ` ${i} >`
    }
    resposta.innerHTML += ' FIM!'
    
}