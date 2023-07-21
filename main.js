'use strict'
//FUNCTION THAT WORKS WHEN CLICKING THE BUTTON
function confirm(a) {
    a.preventDefault()
    const select = document.querySelector('.Estado');
    const cidade = document.querySelector('.Cidade');//cidade
    const localidade = document.querySelector('.Localidade') //localidade
    const cep = document.querySelector('.Cep')
    //CALLING THE LOAD SCREEN FUNCTION
    ShowLoading()
    //CALLING THE FUNCTION TOP PUT INFORMATION ON THE SCREEN
    fill(select, cidade, localidade, cep)
}
async function fill(select, cidade, localidade, cep) {
    //GETTING URL FROM THE ViaCepBrasil API
    const url = `https://viacep.com.br/ws/${select.value}/${cidade.value}/${localidade.value}/json//`
    //CHECKING IF INPUTS ARE LONGER THAN 3 LETTERS
    if (localidade.value.length > 3 && cidade.value.length > 3) {
        const api = await fetch(url)
        const response = await api.json()
        //CHECKING IF API RETURNS EMPTY ARRAY
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