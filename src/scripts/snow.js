// Función para generar un número aleatorio en un rango
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para crear un copo de nieve y posicionarlo aleatoriamente
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    const leftPosition = getRandomInt(0, window.innerWidth);
    const animationDuration = getRandomInt(5, 20) + Math.random(); // Agregamos variabilidad

    snowflake.style.left = `${leftPosition}px`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    document.getElementById("snowfall").appendChild(snowflake);
}

// Crea copos de nieve automáticamente
for (let i = 0; i < 70; i++) {
    createSnowflake();
}
