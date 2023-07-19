'use strict'
function confirm(a) {
    a.preventDefault()
    const select = document.querySelector('.Estado');
    const cidade = document.querySelector('.Cidade');//cidade
    const localidade = document.querySelector('.Localidade') //localidade
    const cep = document.querySelector('.Cep')
    fill(select, cidade, localidade, cep)
}
async function fill(select, cidade, localidade, cep) {
    const url = `https://viacep.com.br/ws/${select.value}/${cidade.value}/${localidade.value}/json//`
    if (localidade.value.length > 3 && cidade.value.length > 3) {
        const api = await fetch(url)
        const response = await api.json()
        if (response.length == 0) {
            animation(cep)
            localidade.classList.remove('invalid')
            cidade.classList.remove('invalid')
            cep.value = 'CEP não encontrado!'
        }
        else {
            animation(cep)
            cep.value = response[0].cep
            localidade.classList.remove('invalid')
            cidade.classList.remove('invalid')
        }
    }
    else {
        animation(cep)
        cep.value = "Preencha todas as caixas!"
        localidade.classList.add('invalid')
        cidade.classList.add('invalid')
    }
}
function animation(cep) {
    cep.classList.add('animation')
}
document.querySelector('#inputs-form').addEventListener('submit', confirm)
