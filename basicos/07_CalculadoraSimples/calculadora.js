export function calculadora(idInput1, idInput2, idBtnSoma, idBtnSub, idBtnMult, idBtnDiv, idResultado) {
    const input1 = document.getElementById(idInput1);
    const input2 = document.getElementById(idInput2);
    const btnSoma = document.getElementById(idBtnSoma);
    const btnSub = document.getElementById(idBtnSub);
    const btnMult = document.getElementById(idBtnMult);
    const btnDiv = document.getElementById(idBtnDiv);
    const resultado = document.getElementById(idResultado);

    function calcular(operacao, simbolo) {
        resultado.innerHTML = "";

        const valor1 = Number(input1.value);
        const valor2 = Number(input2.value);

        if (!Number.isFinite(valor1) || !Number.isFinite(valor2)) {
            resultado.innerHTML = `<p>Digite dois números válidos.</p>`;
            return;
        }

        const res = operacao(valor1, valor2);

        resultado.innerHTML = `<p>${valor1} ${simbolo} ${valor2} = <strong>${res}</strong></p>`;

        input1.value = "";
        input2.value = "";
        input1.focus();
    }

    btnSoma.addEventListener('click', () => {
        calcular((a,b) => a + b, "+")
    });
    
    btnSub.addEventListener('click', () => {
        calcular((a,b) => a - b, "-")
    });

    btnMult.addEventListener('click', () => {
        calcular((a,b) => a * b, "x")
    });

    btnDiv.addEventListener('click', () => {
        const divisor = Number(input2.value);
        if (divisor === 0) {
            resultado.innerHTML = `<p>Divisão por zero não é permitida!</p>`;
            return;
        }
        calcular((a,b) => a / b, "/");
    })
}