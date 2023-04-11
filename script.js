function abrirLista() {

    lista = document.getElementById('minhaLista')
    botao = document.getElementById("botao");

    if (lista.style.display == "none"){
        lista.style.display= ''; // Abrir
    } else {
        lista.style.display = "none"; // Fechar
        botao.blur();
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.btnAbrir')) { // Se clicar em qualquer lugar que não é o botão
        lista = document.getElementById('minhaLista');
        lista.style.display = "none";
        botao.blur();
    } 
}