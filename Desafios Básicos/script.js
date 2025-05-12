import { tabuada } from "./01_Tabuada/tabuada.js";

const btn = document.getElementById('btnTabuada');
const input = document.getElementById('valor');

btn.addEventListener('click', () => {
    const valor = Number(input.value);
    tabuada(valor);
})