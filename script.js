function sim() {
    alert("Agora você não pode mais escapar! Vou te mandar o itinerário completo, incluindo paradas para café e selfies obrigatórias! :3");
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
