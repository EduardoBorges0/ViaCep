function confirm(a) {
    a.preventDefault()
    const select = document.querySelector('.Estado');
    const option = select.value = select.value;
    const localidade = document.querySelector('.Localidade');
    const logradouro = document.querySelector('.Cidade')
    const cep = document.querySelector('.Cep')
    fill(option, localidade, logradouro, cep)
}
async function fill(option, localidade, logradouro, cep) {
    const url = `https://viacep.com.br/ws/${option}/${localidade.value}/${logradouro.value}/json//`
    const api = await fetch(url)
    const response = await api.json()
    if (response.length == 0) {
        cep.value = 'CEP não encontrado!'
        localidade.value = "";
        logradouro.value = "";
    }
    else {
        animation(cep)
        cep.value = response[0].cep
    }
    console.log(response[0].cep)
}
function animation(cep) {
    cep.classList.add('animation')
}
document.querySelector('#inputs').addEventListener('submit', confirm)