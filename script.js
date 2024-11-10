function sim() {
    alert("Ótimo, não baterei então!");
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = `${geraPosicao(0, window.innerHeight - btn.offsetHeight)}px`;
    btn.style.left = `${geraPosicao(0, window.innerWidth - btn.offsetWidth)}px`;
    console.log("Opa, desviei hehe..");
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + min;
}
