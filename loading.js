'use strict'
//LOADING SCREEN
function ShowLoading() {
    const block = document.querySelector('.input-form')
    const loading = document.querySelector('.loading')
    const select = document.querySelector('.Estado');
    const cidade = document.querySelector('.Cidade');
    const localidade = document.querySelector('.Localidade')
    const btn = document.querySelector('#btn')
    localidade.classList.toggle('disabled')
    cidade.classList.toggle('disabled')
    select.classList.toggle('disabled')
    btn.classList.toggle('disabled')
    block.classList.toggle('blockBackground')
    loading.classList.toggle('hide')
   
}
export {ShowLoading}
