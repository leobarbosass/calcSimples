'use strict'    //para comecar o codigo

function calculo (){

    const primeiro = document.getElementById('primeiro').value
    const segundo = document.getElementById('segundo').value
    const resultado = document.getElementById('resultado')

    const nomeCompleto = `O resultado eh: ` + primeiro * segundo

    resultado.textContent = nomeCompleto
}

document.getElementById('juntar').addEventListener('click', calculo)   

