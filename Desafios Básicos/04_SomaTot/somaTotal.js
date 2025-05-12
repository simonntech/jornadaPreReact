export function SomaTotal(idInput, idBtnAdd, idBtnFinalizar, idResultado) {
    let numeros = [];

    const input = document.getElementById(idInput);
    const btnAdd = document.getElementById(idBtnAdd);
    const btnFinalizar = document.getElementById(idBtnFinalizar);
    const divResultado = document.getElementById(idResultado);

    btnAdd.addEventListener('click', () => {
        const valor = Number(input.value);
        if (!isNaN(valor) && input.value !== '') {
            numeros.push(valor);
            input.value = '';
            input.focus();
            divResultado.innerHTML = `<p>Número ${valor} adicionado </p>`;
        } else {
            alert ('Digite um número válido.');
        }
    });

    btnFinalizar.addEventListener('click', () => {
        if (numeros.length === 0) {
            divResultado.innerHTML = `<p>Adicione pelo menos um número antes de finalizar...`
        } else {
            const soma = numeros.reduce((total, n) => total + n, 0);
            divResultado.innerHTML = `
                <p>Você digitou ${numeros.length} números.</p>
                <p> A soma total é <strong>${soma}</strong>.</p>
            `;
            numeros = [];
        }
    })

}