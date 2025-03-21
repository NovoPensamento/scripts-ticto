document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll('button, a');

    botoes.forEach(botao => {
        if (botao.textContent.trim().toLowerCase().includes('comprar agora')) {
            botao.style.setProperty('background-color', '#ff0000', 'important');
            botao.style.setProperty('border-color', '#ff0000', 'important');
            botao.style.setProperty('color', '#ffffff', 'important');

            // Remover possíveis estilos de hover originais
            botao.addEventListener('mouseover', function() {
                botao.style.setProperty('background-color', '#cc0000', 'important');
                botao.style.setProperty('border-color', '#cc0000', 'important');
            });

            botao.addEventListener('mouseout', function() {
                botao.style.setProperty('background-color', '#ff0000', 'important');
                botao.style.setProperty('border-color', '#ff0000', 'important');
            });
        }
    });
});
