import { tabuada } from "./01_Tabuada/tabuada.js";
import { contador } from "./02_Contador/contador.js";
import { parOuImpar } from "./03_ParOuImpar/parOuImpar.js";
import { SomaTotal } from "./04_SomaTot/somaTotal.js";

const btn = document.getElementById('btnTabuada');
const input = document.getElementById('valor');
const inputPoI = document.getElementById('valorpoi');
const btnCont = document.getElementById('btnContador');
const btnPoI = document.getElementById('btnPoI');

btn.addEventListener('click', () => {
    const valor = Number(input.value);
    tabuada(valor);
})

btnCont.addEventListener('click', () => {
    contador();
})

btnPoI.addEventListener('click', () => {
    const valorpoi = Number(inputPoI.value);
    parOuImpar(valorpoi);
})

SomaTotal('valorSomaTot', 'btnAddSoma', 'btnResSoma', 'resultado_somaTot')