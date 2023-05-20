var botao = document.querySelector('#botao')


botao.addEventListener('click', verificar)

function verificar() {
    var anoAtual = new Date().getFullYear
    var anoNascimentoSrting = document.querySelector('#ano')

    if (anoNascimentoSrting.value.length == 0 || anoNascimentoSrting > anoAtual) {
        alert('[Erro] Verifique os dados e tente novamente')
    } else {

    }
}
