// Selección de elementos del DOM
const cookiePopup = document.getElementById('cookie-popup');
const acceptBtn = document.getElementById('accept-btn');
const closeBtn = document.getElementById('close-btn');

// Función para verificar si el usuario ya aceptó las cookies previamente
function verificarConsentimiento() {
    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');

    if (cookiesAceptadas === 'true') {
        // Si ya las aceptó, ocultamos el popup
        cookiePopup.classList.add('hidden');
    } else {
        // Si NO están aceptadas (o se borró el almacenamiento), nos aseguramos de mostrar el popup
        cookiePopup.classList.remove('hidden');
    }
}

// Función para guardar el consentimiento y ocultar la ventana
function aceptarCookies() {
    // Guardar la preferencia en localStorage
    localStorage.setItem('cookiesAceptadas', 'true');

    // Ocultar la ventana emergente
    cookiePopup.classList.add('hidden');
}

// Función para solo cerrar la ventana emergente temporalmente
function cerrarPopup() {
    cookiePopup.classList.add('hidden');
}

// Eventos de escucha
acceptBtn.addEventListener('click', aceptarCookies);
closeBtn.addEventListener('click', cerrarPopup);

// Comprobar estado al cargar la página
verificarConsentimiento();