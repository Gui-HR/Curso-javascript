var botao = document.querySelector('#botao')
botao.addEventListener('click', contar)

function contar() {
    let multiplicador = Number(document.querySelector('#numero').value)
    let tabuada = document.querySelector('#tabuada')  
    tabuada.innerHTML = ''  
    tabuada.setAttribute('size', 10)

    for (let i = 1 ; i <= 10 ; i ++) {
        let expressaoTabuada = document.createElement('option')
        expressaoTabuada.text = `${multiplicador} X ${i} = ${multiplicador * i}`
        expressaoTabuada.value = `tabuada${i}`
        tabuada.appendChild(expressaoTabuada)
    }
    
}
