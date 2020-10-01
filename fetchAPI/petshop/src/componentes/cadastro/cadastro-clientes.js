import validaCPF from '../validacao/validaCPF'
import { cadastrarClientes } from "../../api/cliente";

const eventoEnvia = (form) => {

    /*   const formCadastroCliente = document.querySelector("[data-form]");
     */
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = event.target.querySelector("[data-nome]").value;
        const cpf = event.target.querySelector("[data-cpf]").value;

        if (validaCPF(cpf) === true) {
            cadastrarClientes(nome, cpf);
        } else {
            alert("Esse CPF não existe.");
        }
    });
};

export default eventoEnvia