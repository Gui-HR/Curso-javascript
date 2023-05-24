var array = []
var botaoOpcao = document.querySelector('#botao-opcao')
var botaoTexto = document.querySelector('#botao-texto')
var resultadoTexto = document.querySelector('#resultado-texto')
botaoOpcao.addEventListener('click', adicionar)
botaoTexto.addEventListener('click', mostrar)

function adicionar() {
    let numero = Number(document.querySelector('#numero').value)
    let select = document.querySelector('#select-array')
    let criarOption = document.createElement('option')
    let validacao = 0

    resultadoTexto.innerHTML = ''

    for (let posicao in array) {
        let verificardor = array[posicao]

        if (verificardor == numero) {
            validacao = 1
        }
    }
    
    if (numero > 0 && numero <= 100 && validacao == 0) {
        array.push(numero)

        criarOption.text = `Valor ${numero} adicionado`
        select.appendChild(criarOption)
    } else {
        alert('[ERRO] Este numero ja foi adicionado ou não esta entre 1 e 100')
        
    }
}

function mostrar() {
    if (array.length == 1) {
        resultadoTexto.innerHTML = `<p>Ao todo temos ${array.length} numero cadastrado</p>`

    } else {
        resultadoTexto.innerHTML = `<p>Ao todo temos ${array.length} numeros cadastrados</p>`
    }

 
    resultadoTexto.innerHTML += `<p>O menor valor adicionado foi ${array[0]}</p>`
}
