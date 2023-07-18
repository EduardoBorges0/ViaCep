function confirm(a) {
    a.preventDefault()
    const select = document.querySelector('.Estado');
    const localidade = document.querySelector('.Localidade');
    const logradouro = document.querySelector('.Cidade')
    const cep = document.querySelector('.Cep')
    fill(select, localidade, logradouro, cep)
}
async function fill(select, localidade, logradouro, cep) {
    const url = `https://viacep.com.br/ws/${select.value}/${localidade.value}/${logradouro.value}/json//`
    if (logradouro.value.length > 3) {
        const api = await fetch(url)
        const response = await api.json()
        if (response.length == 0) {
            animation(cep)
            logradouro.classList.remove('invalid')
            localidade.classList.remove('invalid')
            cep.value = 'CEP não encontrado!'
            localidade.value = "";
            logradouro.value = "";

        }
        else {
            animation(cep)
            cep.value = response[0].cep
            logradouro.classList.remove('invalid')
            localidade.classList.remove('invalid')
        }
    }
    else {
        logradouro.classList.add('invalid')
    }
    if (localidade.value.length < 3) {
        localidade.classList.add('invalid')
    }

}
function animation(cep) {
    cep.classList.add('animation')
}
document.querySelector('#inputs').addEventListener('submit', confirm)
