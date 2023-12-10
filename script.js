let sectionContenedor = document.getElementById("contenedor")
let sectionCarta = document.getElementById("carta")
let sectionRecuerdos = document.getElementById("recuerdos")
let sectionRecuerdos2 = document.getElementById("recuerdos-pt2")

sectionCarta.style.display = "none"
sectionRecuerdos.style.display = "none"
sectionRecuerdos2.style.display = "none"

let fecha = "10/06/2022"
let fecha2 = "10/06/22"
let input = document.querySelector("input")
input.focus()
        
function verificar() {

    if(input.value == fecha || input.value == fecha2) {
        alert("Te amo mivida 💟")
        carta()
    } else {
        alert("Ijole 😢. vuelve a intentarlo")
        reiniciarPagina()
    }

    input.value = ""
    input.focus()
}
        
let boton = document.querySelector("button")
boton.onclick = verificar

function carta() {
    sectionRecuerdos2.style.display = "none"
    sectionRecuerdos.style.display = "none"
    sectionContenedor.style.display = "none"
    sectionCarta.style.display = "flex"
}

let botonCarta = document.querySelector("#siguiente")
botonCarta.onclick = continuar

function continuar() {
    sectionContenedor.style.display = "none"
    sectionCarta.style.display = "none"
    sectionRecuerdos2.style.display = "none"
    sectionRecuerdos.style.display = "flex"
}

function alternarContenido() {
    
    let imagen1 = document.getElementById("imagen1")
    let contenido = document.getElementById("contenido-oculto")
    
    if (imagen1.style.display === "flex") {
        imagen1.style.display = "none";
        contenido.style.display = "flex";
    } else {
        imagen1.style.display = "flex";
        contenido.style.display = "none";
    }
}

let botonRecuedo = document.querySelector(".btn-continuar")
botonRecuedo.onclick = continuar2

function continuar2() {
    sectionContenedor.style.display = "none"
    sectionCarta.style.display = "none"
    sectionRecuerdos.style.display = "none"
    sectionRecuerdos2.style.display = "flex"
}

function alternarContenido2() {
    
    let imagen2 = document.getElementById("imagen2")
    let contenido = document.getElementById("contenido-oculto2")
    
    if (imagen2.style.display === "flex") {
        imagen2.style.display = "none";
        contenido.style.display = "flex";
    } else {
        imagen2.style.display = "flex";
        contenido.style.display = "none";
    }
}
    
function reiniciarPagina() {
    location.reload()
}