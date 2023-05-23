
var botao = document.querySelector('#botao')
botao.addEventListener('click', resultado)

function resultado() {
    var resposta = document.querySelector('#p-resposta')
    var nInicio = Number(document.querySelector('#inicio').value)
    var nFim = Number(document.querySelector('#fim').value)
    var nPasso = Number(document.querySelector('#passo').value)
    resposta.innerHTML = ''

    if (nInicio == 0 && nFim == 0 && nPasso == 0){
        alert('[ERRO] Preencha todos os campos e tente novamente')
    } else if (nPasso <= 0 ){
        alert('[ERRO] Preencha todos os campos e tente novamente')
    } else if (nPasso > 0 && nInicio < nFim) {
        for (var i = nInicio ; i <= nFim ; i += nPasso) {
            resposta.innerHTML += ` ${i} >`
        }
        resposta.innerHTML += ' FIM!'

    } else if (nPasso > 0 && nInicio > nFim) {
        for (var i = nInicio ; i >= nFim ; i -= nPasso) {
            resposta.innerHTML += ` ${i} >`
        }
        resposta.innerHTML += ' FIM!'
    }    
}