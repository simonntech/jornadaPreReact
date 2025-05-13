export function parOuImpar(valor) {
    const div = document.querySelector('.resultado_poi');
    const p = document.createElement('p');
    div.innerHTML = "";

    (valor %2 === 0)? p.innerHTML = `O número ${valor} é par!`: p.innerHTML = `O número ${valor} é ímpar!`;

    div.appendChild(p)
}