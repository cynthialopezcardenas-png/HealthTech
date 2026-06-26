document.addEventListener("DOMContentLoaded", () => {

    // LÓGICA DE NAVEGACIÓN DE BOTONES ---
    const botones = document.querySelectorAll(".boton-perfil, .btn-seccion");
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault(); 

            const target = boton.getAttribute("data-target");
            const nombreSeccion = boton.textContent.trim();

            if (target && target.endsWith(".html")) {
                if (target.toLowerCase() === paginaActual.toLowerCase()) {
                    alert(`Ya te encuentras en la página de: ${nombreSeccion}`);
                } else {
                    alert(`Redirigiendo a la página: ${nombreSeccion}...`);
                    window.location.href = target;
                }
            } else {
                alert(`Explorando sección interna: "${nombreSeccion}"\nDestino local: ${target}`);
                console.log("Sección interna de la página: " + target);
            }
        });
    });

    // LÓGICA DEL FORMULARIO DE CONTACTO ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                alert("Success!");
                form.reset();
            })
            .catch(error => {
                console.error("Error al enviar el formulario:", error);
            });
        });
    }

// --- CARRUSEL DE IMÁGENES ---

const imagenes = [
    "https://tecscience.tec.mx/es/wp-content/uploads/sites/8/2024/12/medicina-de-precision.jpg",
    "https://usil-blog.s3.amazonaws.com/PROD/blog/image/te-gusta-carrera-medicina-humana-usil.jpg",
    "https://dczogbi.com/wp-content/uploads/2025/09/medicina-legal-que-es.jpg",
    "https://hospitalgalenia.com/wp-content/uploads/2024/07/h3.jpg",
    "https://miuniversidadculiacan.com/wp-content/uploads/2021/05/medicina.jpg",
];
let indiceActual = 0;

const imagenPrincipal = document.getElementById("ImagenPrincipal");
const btAnterior = document.getElementById("btAnterior");
const btSiguiente = document.getElementById("btSiguiente");

function mostrarImagen(indice) {
    // Si la etiqueta de la imagen no existe en esta página, salimos de la función sin arrojar errores
    if (!imagenPrincipal) return; 
    
    if (imagenes[indice]) {
        imagenPrincipal.src = imagenes[indice];
    }
}

// Ejecutar solo si estamos en la página que contiene el carrusel
if (imagenPrincipal) {
    mostrarImagen(indiceActual);

    if (btSiguiente) {
        btSiguiente.addEventListener("click", () => {
            indiceActual++;
            if (indiceActual >= imagenes.length) {
                indiceActual = 0;
            }
            mostrarImagen(indiceActual);
        });
    }

    if (btAnterior) {
        btAnterior.addEventListener("click", () => {
            indiceActual--;
            if (indiceActual < 0) {
                indiceActual = imagenes.length - 1; 
            }
            mostrarImagen(indiceActual);
        });
    }
}
}); 