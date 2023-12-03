// Mi solucion
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

// Alternativa usando seen
function findFirstRepeated(gifts) {
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