// Tamanho mínimo 8 caracteres
// Maíuscula, minúscula, número e caractere especial
// Exibir mensagens diferentes para cada erro

export function validarSenha(senha) {
    const erros = [];

    if (senha.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.")
    }

    if (!/[A-Z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra maíuscula.");
    }

    if (!/[a-z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra minúscula.")
    }

    if (!/[0-9]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um número.")
    }

    if (!/[^A-Za-z0-9]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um caractere especial.")
    }

    return erros;

}