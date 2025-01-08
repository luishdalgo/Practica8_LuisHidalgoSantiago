document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const cambiarFondoBtn = document.getElementById("cambiarFondo");
    const añadirElementoBtn = document.getElementById("añadirElemento");
    const resetearBtn = document.getElementById("resetear"); // Nuevo botón de resetear
    const contenedorElementos = document.querySelector(".contenedor-elementos");

    // Lista de imágenes aleatorias
    const imagenesAleatorias = ["gato.png", "oso.png", "mapache.png", "conejo.png", "tigre.png", "pedroangel.png"]; // Agrega aquí tus imágenes

    // Cambiar el color de fondo de las imágenes
    cambiarFondoBtn.addEventListener("click", () => {
        const colorSeleccionado = colorPicker.value;
        const elementos = document.querySelectorAll(".elemento img");
        elementos.forEach((img) => {
            img.style.backgroundColor = colorSeleccionado;
        });
    });

    // Añadir un nuevo elemento
    añadirElementoBtn.addEventListener("click", () => {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.classList.add("elemento");

        // Crear la imagen
        const nuevaImagen = document.createElement("img");

        // Seleccionar una imagen aleatoria
        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];
        nuevaImagen.src = imagenAleatoria; // Cambiar por la imagen aleatoria seleccionada
        nuevaImagen.alt = "Imagen Aleatoria";

        // Obtener el color de fondo actual de las imágenes
        const colorFondoActual = document.querySelector(".contenedor-elementos .elemento img")?.style.backgroundColor || "#f9f9f9";
        nuevaImagen.style.backgroundColor = colorFondoActual; // Asignar el mismo color de fondo

        // Crear los botones
        const contenedorBotones = document.createElement("div");
        contenedorBotones.classList.add("botones");

        const botonCambiar = document.createElement("button");
        botonCambiar.classList.add("cambiar");
        botonCambiar.textContent = "Cambiar";

        const botonBorrar = document.createElement("button");
        botonBorrar.classList.add("borrar");
        botonBorrar.textContent = "Borrar";

        contenedorBotones.appendChild(botonCambiar);
        contenedorBotones.appendChild(botonBorrar);

        // Agregar imagen y botones al nuevo elemento
        nuevoElemento.appendChild(nuevaImagen);
        nuevoElemento.appendChild(contenedorBotones);

        // Agregar el nuevo elemento al contenedor
        contenedorElementos.appendChild(nuevoElemento);

        // Asignar eventos a los botones del nuevo elemento
        asignarEventosBotones(botonCambiar, botonBorrar, nuevaImagen);
    });

    // Asignar eventos a los botones de cambiar y borrar
    function asignarEventosBotones(botonCambiar, botonBorrar, imagen) {
        // Cambiar la imagen aleatoriamente
        botonCambiar.addEventListener("click", () => {
            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];
            imagen.src = imagenAleatoria; // Cambiar la imagen por una aleatoria

            // Mantener el fondo actual
            const colorSeleccionado = colorPicker.value;
            imagen.style.backgroundColor = colorSeleccionado;
        });

        // Eliminar el elemento
        botonBorrar.addEventListener("click", () => {
            botonBorrar.parentElement.parentElement.remove();
        });
    }

    // Restablecer todas las imágenes a su estado por defecto
    resetearBtn.addEventListener("click", () => {
        const imagenes = document.querySelectorAll(".elemento img");
        imagenes.forEach((img) => {
            img.style.backgroundColor = "transparent"; // Fondo transparente
            
        });
        colorPicker.value = "#f9f9f9"; // Restablecer el color de fondo del picker
    });

    // Asignar eventos iniciales a los botones existentes
    document.querySelectorAll(".elemento").forEach((elemento) => {
        const botonCambiar = elemento.querySelector(".cambiar");
        const botonBorrar = elemento.querySelector(".borrar");
        const imagen = elemento.querySelector("img");
        asignarEventosBotones(botonCambiar, botonBorrar, imagen);
    });
});
