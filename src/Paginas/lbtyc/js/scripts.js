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





//INDEX TEXTO

const elements = document.querySelectorAll(".reveal");

const fadeObserver  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.5 });

elements.forEach(el => fadeObserver .observe(el));





// FOTO FADE IN

const fotos = document.querySelectorAll(".foto");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(fotos).indexOf(entry.target);


      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fotos.forEach(f => observer.observe(f));




//     FLECHAS SLIDER INVESTIGACION



const slider = document.querySelector(".home-investigacion-list");
const slider2 = document.querySelector(".programa-card-list")
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");


// Check if the screen width is mobile-sized (e.g., 768px or less)
if (window.matchMedia('(max-width: 992px)').matches) {
    // Mobile device: Do nothing or exit the function
    console.log("JS disabled for mobile");
} else {
    // Desktop/Tablet code runs normally
    
    if (slider && prevButton && nextButton) {

        nextButton.addEventListener("click", () => {
            slider.scrollBy({
                left: slider.clientWidth * 0.8,
                behavior: "smooth"
            });
        });

        prevButton.addEventListener("click", () => {
            slider.scrollBy({
                left: -slider.clientWidth * 0.8,
                behavior: "smooth"
            });
        });

    }

    if (slider2 && prevButton && nextButton) {

        nextButton.addEventListener("click", () => {
            slider2.scrollBy({
                left: slider2.clientWidth * 0.8,
                behavior: "smooth"
            });
        });

        prevButton.addEventListener("click", () => {
            slider2.scrollBy({
                left: -slider2.clientWidth * 0.8,
                behavior: "smooth"
            });
        });

    }
}








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