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
        var genero = 'nenhum'
        
        if (masculino.checked) {
            genero = 'homem'
        } else if (feminino.checked) {
            genero = 'mulher'
        } else {
            alert('[ERRO] Verifique os dados e tente novamente')
        }
        console.log(genero);

        var pResultado = document.querySelector('#p-resultado')
        var imagem = document.querySelector('#imagem')

        if (genero == 'homem' && genero != 'nenhum') {
            if (idade <= 10) {
                pResultado.innerText = 'Homem de ' + idade + ' anos'
                imagem.src = 'img/crianca-homem.jpg'
            } else if (idade <= 25 ) {
                pResultado.innerText = 'Homem de ' + idade + ' anos'
                imagem.src = 'img/jovem-homem.jpg'
            } else if (idade < 50) {
                pResultado.innerText = 'Homem de ' + idade + ' anos'
                imagem.src = 'img/adulto-homem.jpg'
            } else if (idade >= 50) {
                pResultado.innerText = 'Homem de ' + idade + ' anos'
                imagem.src = 'img/idoso-homem.jpg'
            }
        } else if (genero == 'mulher' && genero != 'nenhum'){
            if (idade <= 10) {
                pResultado.innerText = 'Mulher de ' + idade + ' anos'
                imagem.src = 'img/crianca-mulher.jpg'
            } else if (idade <= 25 ) {
                pResultado.innerText = 'Mulher de ' + idade + ' anos'
                imagem.src = 'img/jovem-mulher.jpg'
            } else if (idade < 50) {
                pResultado.innerText = 'Mulher de ' + idade + ' anos'
                imagem.src = 'img/adulto-mulher.jpg'
            } else if (idade >= 50) {
                pResultado.innerText = 'Mulher de ' + idade + ' anos'
                imagem.src = 'img/idoso-mulher.jpg'
            }
        }

    }
}