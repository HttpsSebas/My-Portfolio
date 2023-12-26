function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}


function mostrarTexto() {
    var texto = document.getElementById("textoMiniatura");
    texto.style.display = "block";
}

function ocultarTexto() {
    var texto = document.getElementById("textoMiniatura");
    texto.style.display = "none";
}