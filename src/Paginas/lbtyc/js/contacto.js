document.addEventListener("DOMContentLoaded", () => {

/* NAVBAR */
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#navLinks');
const logo = document.querySelector('#logo');

const dropdownBtns = document.querySelectorAll('.dropbtn');
const dropdownContents = document.querySelectorAll('.dropdown-content');


// dropdown abierto en mobile
let openDropdownIndex = null;


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  logo.classList.toggle('logo-hidden');
});


// Mostrar/Ocultar dropdowns de manera independiente en mobile y permitir que el enlace funcione en desktop
dropdownBtns.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    
    if (window.innerWidth < 768) {
      
      const isDropdownOpen = dropdownContents[index].classList.contains('show-dropdown');


      
      if (isDropdownOpen) {
        return true; 
      } else {
        
        event.preventDefault();
        
        if (openDropdownIndex !== null && openDropdownIndex !== index) {
          dropdownContents[openDropdownIndex].classList.remove('show-dropdown');
        }
        
        dropdownContents[index].classList.toggle('show-dropdown');
        // Guardar el índice del dropdown abierto
        openDropdownIndex = index;
      }
    } else {
      // osea desktop
      return true;
    }
  });
});







/* FORM + FORMSPREE + POPUP */

const form = document.getElementById("contactoForm");
const popup = document.getElementById("mensajeenviado");
const cerrarBtn = document.getElementById("cerrarMensaje");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();


    // Comprobar campos
    if (!email || !mensaje) {

        alert("Completá todos los campos");
        return;

    }


    try {

        // ENVIAR A FORMSPREE
        const respuesta = await fetch(form.action, {

            method: "POST",

            body: new FormData(form),

            headers: {
                "Accept": "application/json"
            }

        });


        // Si Formspree recibió el mensaje
        if (respuesta.ok) {

            // Mostrar TU popup
            popup.classList.add("activo");

            // Limpiar formulario
            form.reset();

        } else {

            alert("No se pudo enviar el mensaje. Intentá nuevamente.");

        }


    } catch (error) {

        console.error("Error:", error);

        alert("Hubo un error al enviar el mensaje.");

    }

});


// CERRAR POPUP

cerrarBtn.addEventListener("click", function () {

    popup.classList.remove("activo");

});

});




//     IDIOMAA

let idiomaActual = "es";


// ========================================
// CAMBIAR A INGLÉS
// ========================================

async function cambiarAIngles() {

    try {

        console.log("Intentando cargar en.json...");

        const respuesta = await fetch("./lang/en.json");

        if (!respuesta.ok) {
            throw new Error("No se pudo encontrar en.json");
        }

        const traducciones = await respuesta.json();

        console.log("Traducciones cargadas:", traducciones);


        // Buscar todos los elementos traducibles
        const elementos = document.querySelectorAll("[data-i18n]");


        elementos.forEach(elemento => {

            const clave = elemento.getAttribute("data-i18n");

            console.log("Buscando:", clave);


            if (traducciones[clave]) {

                elemento.textContent = traducciones[clave];

            } else {

                console.warn("No existe traducción para:", clave);

            }

        });


        // Cambiar idioma del documento
        document.documentElement.lang = "en";

        idiomaActual = "en";


        // Cambiar botón activo
        actualizarBoton("en");


        // Guardar idioma
        localStorage.setItem("idioma", "en");


    } catch (error) {

        console.error("ERROR:", error);

        alert("No se pudo cargar la traducción al inglés. Revisá la consola.");

    }

}



// ========================================
// ACTUALIZAR BOTONES
// ========================================

function actualizarBoton(idioma) {

    const botonES = document.getElementById("btn-es");
    const botonEN = document.getElementById("btn-en");


    botonES.classList.remove("active");
    botonEN.classList.remove("active");


    if (idioma === "es") {

        botonES.classList.add("active");

    } else {

        botonEN.classList.add("active");

    }

}



// ========================================
// VOLVER A ESPAÑOL
// ========================================

function volverAEspanol() {

    localStorage.setItem("idioma", "es");

    location.reload();

}



// ========================================
// AL CARGAR LA PÁGINA
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const botonES = document.getElementById("btn-es");
    const botonEN = document.getElementById("btn-en");


    // Botón ES
    botonES.addEventListener("click", () => {

        volverAEspanol();

    });


    // Botón EN
    botonEN.addEventListener("click", () => {

        cambiarAIngles();

    });


    // Revisar idioma guardado
    const idiomaGuardado = localStorage.getItem("idioma");


    if (idiomaGuardado === "en") {

        cambiarAIngles();

    } else {

        actualizarBoton("es");

    }

});