export function tabuada(valor) {
    const div = document.querySelector('.resultado');
    div.innerHTML = "";    
    
    for (let i= 1; i <= 10; i++) {
        const p = document.createElement('p');
        p.innerHTML = `${i} x ${valor} = ${i * valor}`;
        div.appendChild(p);
    }
}