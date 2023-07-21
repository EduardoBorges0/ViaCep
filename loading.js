'use strict'
//LOADING SCREEN
function ShowLoading() {
    const block = document.querySelector('.input-form')
    const loading = document.querySelector('.loading')
    const select = document.querySelector('.Estado');
    const cidade = document.querySelector('.Cidade');
    const localidade = document.querySelector('.Localidade')
    const btn = document.querySelector('#btn')
    localidade.classList.add('disabled')
    cidade.classList.add('disabled')
    select.classList.add('disabled')
    btn.classList.add('disabled')
    block.classList.add('blockBackground')
    loading.classList.remove('hide')
    setTimeout(() => {
        localidade.classList.remove('disabled')
        cidade.classList.remove('disabled')
        select.classList.remove('disabled')
        block.classList.remove('blockBackground')
        btn.classList.remove('disabled')
        loading.classList.add('hide')
    }, 1000)
}