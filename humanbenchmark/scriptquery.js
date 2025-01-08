$(document).ready(function () {
    let state = "initial"; // Estados: initial, waiting, red, final
    let timeout;
    let startTime;

    $(".box").click(function () {
        if (state === "initial") {
            state = "waiting";
            $(".box").text("Espere al rojo...");
            $(".box").removeClass("red green");
            timeout = setTimeout(() => {
                state = "red";
                $(".box").text("¡Pulse ahora!");
                $(".box").addClass("red");
                startTime = Date.now();
            }, Math.random() * 2000 + 1000); // Tiempo aleatorio entre 1 y 3 segundos
        } else if (state === "waiting") {
            clearTimeout(timeout);
            $(".box").text("Demasiado pronto. Intente otra vez.");
            state = "initial";
        } else if (state === "red") {
            const reactionTime = Date.now() - startTime;
            $(".result").text(`Tiempo de reacción: ${reactionTime} ms`);
            $(".box").text("Haga clic para iniciar");
            state = "initial";
        }
    });
});
