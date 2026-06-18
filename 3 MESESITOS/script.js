console.log("Página funcionando ❤️");

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.innerHTML = "❤";
    corazon.classList.add("corazon");

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);
}

setInterval(crearCorazon, 500);
const fotos = [

"https://i.pinimg.com/1200x/d6/59/29/d659294aeabfea3d7daa7ce7cbc36c99.jpg",

"https://i.pinimg.com/736x/ce/5c/e9/ce5ce94a6fa9010b264ec769dfcedfe2.jpg",

"https://i.pinimg.com/736x/cb/85/88/cb85880183ad8672d1435560319b2a96.jpg",

"https://i.pinimg.com/736x/d9/d3/ee/d9d3ee5083cb73912dd2c3df23686dc3.jpg",

"https://i.pinimg.com/736x/d6/a4/9b/d6a49bdf418a67a0ea62d233c07d46a0.jpg",

"https://i.pinimg.com/736x/a7/23/24/a72324321da59f228a61c000724d9d70.jpg",

"https://i.pinimg.com/736x/b9/ba/2a/b9ba2aa6faf3afa8dcde5a9ea5929d84.jpg",

"https://i.pinimg.com/736x/0f/4c/34/0f4c34fc00e5c6590bbaf8f9c2a79907.jpg",

"https://i.pinimg.com/736x/8a/0b/27/8a0b27d36512c40ff7d575a3d2ef2a7d.jpg"


];

const frases = [

"te adoro mi amor",

"Mi lugar favorito es contigo",

"besos a donde no llega el sol"

];
let indice = 0;

const foto = document.getElementById("foto");
const fraseFoto = document.getElementById("fraseFoto");

function actualizarCarrusel() {
    foto.src = fotos[indice];
    fraseFoto.textContent = frases[indice];
}

actualizarCarrusel();

document.getElementById("siguiente").addEventListener("click", () => {

    indice++;

    if (indice >= fotos.length) {
        indice = 0;
    }

    actualizarCarrusel();

});

document.getElementById("anterior").addEventListener("click", () => {

    indice--;

    if (indice < 0) {
        indice = fotos.length - 1;
    }

    actualizarCarrusel();

});
function actualizarContador() {

    const ahora = new Date();

    let proximoMes = new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        18
    );

    if (ahora.getDate() >= 18) {
        proximoMes.setMonth(proximoMes.getMonth() + 1);
    }

    const diferencia = proximoMes - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    document.getElementById("cuenta").innerHTML = `
        ${dias} días <br>
        ${horas} horas <br>
        ${minutos} minutos <br>
        ${segundos} segundos <br><br>

        Para nuestro próximo mes ❤️
    `;
}

setInterval(actualizarContador, 1000);

actualizarContador();
const botones = document.querySelectorAll(".abrir");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const mensaje =
            boton.nextElementSibling;

        if (mensaje.style.display === "block") {

            mensaje.style.display = "none";

        } else {

            mensaje.style.display = "block";

        }

    });

});
document
.getElementById("botonSorpresa")
.addEventListener("click", () => {

    document.getElementById("mensajeFinal")
    .style.display = "block";

});
document.getElementById("subir")
.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});const fondoEstrellas = document.querySelector(".estrellas");

for(let i = 0; i < 80; i++){

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    estrella.style.left = Math.random() * 100 + "%";

    estrella.style.top = Math.random() * 100 + "%";

    estrella.style.animationDuration =
        (Math.random() * 3 + 1) + "s";

    fondoEstrellas.appendChild(estrella);

}const secciones = document.querySelectorAll("section");

secciones.forEach(seccion => {
    seccion.classList.add("oculto");
});

function mostrarSecciones() {

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            seccion.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();