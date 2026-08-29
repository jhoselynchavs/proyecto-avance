// ================================
// JAVASCRIPT - SWEET CRISS
// ================================

// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // MENÚ DE NAVEGACIÓN
    // ================================

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
            enlaces.forEach(item => item.classList.remove("activo"));
            enlace.classList.add("activo");
        });
    });


    // ================================
    // VALIDACIÓN DEL FORMULARIO
    // ================================

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById("nombre");
            const correo = document.getElementById("correo");
            const mensaje = document.getElementById("mensaje");

            // Eliminar espacios
            nombre.value = nombre.value.trim();
            correo.value = correo.value.trim();
            mensaje.value = mensaje.value.trim();

            // Validar campos
            if (nombre.value === "") {
                alert("Por favor, escribe tu nombre.");
                nombre.focus();
                return;
            }

            if (correo.value === "") {
                alert("Por favor, escribe tu correo electrónico.");
                correo.focus();
                return;
            }

            if (!correo.value.includes("@")) {
                alert("Por favor, escribe un correo electrónico válido.");
                correo.focus();
                return;
            }

            if (mensaje.value === "") {
                alert("Por favor, escribe un mensaje.");
                mensaje.focus();
                return;
            }

            // Mensaje de confirmación
            alert(
                "¡Gracias por contactarnos, " +
                nombre.value +
                "! Hemos recibido tu mensaje."
            );

            // Limpiar formulario
            formulario.reset();
        });


        // ================================
        // VALIDACIÓN EN TIEMPO REAL
        // ================================

        const campos = formulario.querySelectorAll("input, textarea");

        campos.forEach(campo => {

            campo.addEventListener("input", () => {

                if (campo.value.trim() !== "") {
                    campo.style.borderColor = "#7B4B94";
                } else {
                    campo.style.borderColor = "#e5cbd6";
                }

            });

        });
    }


    // ================================
    // EFECTO AL HACER SCROLL
    // ================================

    const secciones = document.querySelectorAll("main section");

    window.addEventListener("scroll", () => {

        let seccionActual = "";

        secciones.forEach(seccion => {

            const posicion = seccion.offsetTop - 150;

            if (window.scrollY >= posicion) {
                seccionActual = seccion.getAttribute("id");
            }

        });

        enlaces.forEach(enlace => {

            enlace.classList.remove("activo");

            if (enlace.getAttribute("href") === "#" + seccionActual) {
                enlace.classList.add("activo");
            }

        });

    });


    // ================================
    // MENSAJE DE BIENVENIDA
    // ================================

    console.log("🍰 Bienvenido a Sweet Criss");
    console.log("Postres personalizados y únicos.");
});