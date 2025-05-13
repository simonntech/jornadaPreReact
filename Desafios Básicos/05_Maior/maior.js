export function iniciarAnaliseNumeros(idInput, idAdd, idFinalizar, idResultado) {
    const numeros = [];

    const input = document.getElementById(idInput);
    const btnAdd = document.getElementById(idAdd);
    const btnFinalizar = document.getElementById(idFinalizar);
    const divResultado = document.getElementById(idResultado);

    function isValido(n) {
        return n >=1 && n <=100;
    }

    function jaExiste(n) {
        return numeros.includes(n);
    }

    btnAdd.addEventListener('click', () => {
        const valor = Number(input.value);
        if (isValido(valor) && !jaExiste(valor)) {
            numeros.push(valor);
            input.value = '';
            input.focus();
            divResultado.innerHTML = `<p>Valor ${valor} adicionado.</p>`;
        } else {
            alert("Número inválido ou já adicionado.")
        }
    });

    btnFinalizar.addEventListener('click', () => {
        if (numeros.length === 0) {
            divResultado.innerHTML = `<p> Adicione números primeiro. </p>`;
        } else {
            const total = numeros.length;
            const maior = Math.max(...numeros);
            const menor = Math.min(...numeros);
            const soma = numeros.reduce((acc, n) => acc + n, 0);
            const media = soma / total;

            divResultado.innerHTML = `
                <p>Total: ${total} números</p>
                <p>Maior: ${maior}</p>
                <p>Menor: ${menor}</p>
                <p>Soma: ${soma}</p>
                <p>Média: ${media.toFixed(2)}</p>
            `;
        }
    });

}