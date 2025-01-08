document.addEventListener("DOMContentLoaded", function () {
    let state = "initial"; // Estados: initial, waiting, red, final
    let timeout;
    let startTime;

    const box = document.querySelector(".box");
    const result = document.querySelector(".result");

    box.addEventListener("click", function () {
        if (state === "initial") {
            state = "waiting";
            box.textContent = "Espere al rojo...";
            box.classList.remove("red", "green");
            timeout = setTimeout(() => {
                state = "red";
                box.textContent = "¡Pulse ahora!";
                box.classList.add("red");
                startTime = Date.now();
            }, Math.random() * 2000 + 1000); // Tiempo aleatorio entre 1 y 3 segundos
        } else if (state === "waiting") {
            clearTimeout(timeout);
            box.textContent = "Demasiado pronto. Intente otra vez.";
            state = "initial";
        } else if (state === "red") {
            const reactionTime = Date.now() - startTime;
            result.textContent = `Tiempo de reacción: ${reactionTime} ms`;
            box.textContent = "Haga clic para iniciar";
            state = "initial";
        }
    });
});
