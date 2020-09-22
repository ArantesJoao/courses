const formCadastroCliente = document.querySelector('[data-form]')

formCadastroCliente.addEventListener('submit', e => {
    e.preventDefault()

    const nome = e.target.querySelector('[data-nome]')
    const cpf = e.target.querySelector('[data-cpf]')

    cadastrarClientes(nome.value, cpf.value)
})