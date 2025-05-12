export function contador() {
    const div = document.querySelector('.resultado_contador');
    div.innerHTML= "Contando... ";

    for (let i = 1; i <= 101; i+=5) {
        setTimeout(() => {
            const p = document.createElement('p');
        p.style.display= 'inline-block'
        p.innerHTML = `${i} ... `;
        if(i === 101) {
            p.innerHTML = `contei até ${i}!`
        }
        div.appendChild(p);
        }, i * 200);
    }
}