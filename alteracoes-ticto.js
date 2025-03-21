document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão "Comprar Agora" pelo texto interno
    const botoes = document.querySelectorAll('button, a');

    botoes.forEach(botao => {
        if (botao.textContent.trim().toLowerCase().includes('comprar agora')) {
            botao.style.backgroundColor = '#ff0000'; // Cor vermelha
            botao.style.borderColor = '#ff0000';     // Borda vermelha, caso exista
        }
    });
});
