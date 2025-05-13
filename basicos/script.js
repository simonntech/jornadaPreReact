// importando módulos
import { tabuada } from "./01_Tabuada/tabuada.js";
import { contador } from "./02_Contador/contador.js";
import { parOuImpar } from "./03_ParOuImpar/parOuImpar.js";
import { SomaTotal } from "./04_SomaTot/somaTotal.js";
import { iniciarAnaliseNumeros } from "./05_Maior/maior.js";
import { reverterString } from "./06_ReversorString/reversorString.js";
import { calculadora } from "./07_CalculadoraSimples/calculadora.js";

// criando constantes no DOM para a Tabuada, Contador e Par ou Ímpar
const btn = document.getElementById('btnTabuada');
const input = document.getElementById('valor');
const inputPoI = document.getElementById('valorpoi');
const btnCont = document.getElementById('btnContador');
const btnPoI = document.getElementById('btnPoI');

// importando função tabuada
btn.addEventListener('click', () => {
    const valor = Number(input.value);
    tabuada(valor);
})

// importando função contador
btnCont.addEventListener('click', () => {
    contador();
})

// importando par ou ímpar
btnPoI.addEventListener('click', () => {
    const valorpoi = Number(inputPoI.value);
    parOuImpar(valorpoi);
})

// Daqui pra frente é importado apenas a função, passando os valores por parâmetro
// importando função Soma Total
SomaTotal('valorSomaTot', 'btnAddSoma', 'btnResSoma', 'resultado_somaTot')

// importando função de Analisar Números 
iniciarAnaliseNumeros('inputInfoN', 'btnAddInfo', 'btnAnalisar', 'resultado_info')

// importando função de Inverter String
reverterString ('inputNome', 'btnReverter', 'resultado_Reverter')

// importando função da Calculadora Simples
calculadora('inputPrimeiroN', 'inputSegundoN', 'btnAdi', 'btnSub', 'btnMul', 'btnDiv', 'resultadoCalculadora')