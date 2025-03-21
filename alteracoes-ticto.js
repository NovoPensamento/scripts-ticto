(function(){
    function alterarTextos() {
        const metodoCartao = document.querySelector('input[type="radio"][value="cartao"]:checked');
        const metodoFrete = document.querySelector('input[type="radio"][value="PAC"]:checked, input[type="radio"][value="SEDEX"]:checked');
        const elementos = document.querySelectorAll("*");

        elementos.forEach(el => {
            if (el.textContent.includes("Total nesta cobrança:")) {
                if (metodoCartao) {
                    el.textContent = el.textContent.replace("Total nesta cobrança:", "Valor Parcelado:");

                    if(metodoFrete && !document.getElementById("aviso-parcelamento")){
                        const aviso = document.createElement("div");
                        aviso.id = "aviso-parcelamento";
                        aviso.style.fontSize = "0.9em";
                        aviso.style.marginTop = "5px";
                        aviso.textContent = "O valor do frete será incluso na 1ª Parcela";
                        el.parentNode.insertBefore(aviso, el.nextSibling);
                    }
                } else {
                    el.textContent = el.textContent.replace("Valor Parcelado:", "Total nesta cobrança:");

                    const avisoExistente = document.getElementById("aviso-parcelamento");
                    if(avisoExistente){
                        avisoExistente.remove();
                    }
                }
            }
        });
    }

    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.addEventListener("change", alterarTextos);
    });

    alterarTextos();
})();
