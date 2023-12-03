// Mi solucion, Puntos: 10, Complejidad cognitiva: 4
function findFirstRepeated(gifts) {
    let counterToys = {};

    for (let i = 0; i < gifts.length; i++) {
        if (counterToys[gifts[i]]) {
            counterToys[gifts[i]]++;

            if (counterToys[gifts[i]] >= 2) {
                return gifts[i];
            }
        }

        else {
            counterToys[gifts[i]] = 1;
        }
    }

    return -1;
}

// Alternativa usando seen, Puntos: 110, Complejidad cognitiva: 3
function findFirstRepeatedSeen(gifts) {
    let seen = {};

    for (let i = 0; i < gifts.length; i++) {
        if (seen[gifts[i]]) {
            return gifts[i];
        }

        else {
            seen[gifts[i]] = true;
        }
    }

    return -1;
}