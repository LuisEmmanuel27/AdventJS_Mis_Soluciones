// Puntos: 230, Complejidad cognitiva: 1
function maxDistance(movements) {
    let countMovements = { '<': 0, '>': 0, '*': 0 };

    for (let movement of movements) {
        countMovements[movement]++;
    }

    let distance = Math.abs(countMovements['<'] - countMovements['>']) + countMovements['*'];

    return distance;
}

console.log(maxDistance('<<<*>>>>>****<<<<<<<<<<'));
