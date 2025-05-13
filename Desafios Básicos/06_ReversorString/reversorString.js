export function reverterString(idInput, idConverter, idResultado) {
    const input = document.getElementById(idInput);
    const btn = document.getElementById(idConverter);
    const resultado = document.getElementById(idResultado);

    btn.addEventListener ('click', () => {
        const texto = input.value;
        if (texto.trim() === '') {
            resultado.innerHTML = `<p>Digite algum texto primeiro</p>`;
            return;
        }

        const invertido = texto.split('').reverse().join('');
        resultado.innerHTML = `<p>Texto Invertido: <strong>${invertido}</strong></p>`;
    })
}