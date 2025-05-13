import { validarSenha } from "./validador.js";

const inputSenha = document.getElementById('senha');
const btn = document.getElementById('btnCriar');
const msg = document.getElementById('msg');

const mostrarSenha = document.getElementById('mostrarSenha');

mostrarSenha.addEventListener('change', () => {
    inputSenha.type = mostrarSenha.checked ? 'text' : 'password';
});

btn.addEventListener('click', () => {
    const senha = inputSenha.value;
    const erros = validarSenha(senha);

    if (erros.length === 0) {
        msg.innerHTML = `<p class="alert alert-success">Senha válida!</p>`;
    } else {
        msg.innerHTML = erros.map(erro => `<p class="alert alert-danger">${erro}</p>`).join('');
    }

    //Garantir visibilidade e remove se já tiver
    msg.style.display = 'block';
    msg.style.opacity = '1';
    msg.classList.remove('fade-out');

    //Limpar mensagens após 5 segundos com esmaecimento do CSS
    setTimeout(() => {
        msg.classList.add('fade-out');
    }, 4000);

    setTimeout(() => {
        msg.innerHTML = '';
        msg.classList.remove('fade-out');
        msg.style.display = 'none';
    }, 4500);

})