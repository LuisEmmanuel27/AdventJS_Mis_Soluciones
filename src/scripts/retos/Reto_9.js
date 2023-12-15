// Puntos: 370, Complejidad cognitiva: 3
function adjustLights(lights) {
    let changes = 0;
    const size = lights.length;
    const leds = {
        '🔴': '🟢',
        '🟢': '🔴'
    }

    for (let i = size - 1; i >= 0; i--) {
        if (lights[i - 1] === lights[i]) {
            let light = lights[i];
            lights[i - 1] = leds[light];
            changes++;
        }
    }

    return changes
}

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));