function verificar() {
    var anoAtual = new Date().getFullYear()
    var anoNascimento = document.querySelector('#string-ano')
    var resultado = document.querySelector('#resultado')

    if (anoNascimento.value == 0 || anoNascimento.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var masculino = document.getElementsByName('sexo')[0]
        var feminino = document.getElementsByName('sexo')[1]
        var idade = anoAtual - Number(anoNascimento.value)
        var genero
        
        if (masculino.checked) {
            genero = 'homem'
        } else if (feminino.checked) {
            genero = 'mulher'
        }

        console.log(genero);

    }
}