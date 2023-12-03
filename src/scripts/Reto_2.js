//Mi solucion, puntos: 220, Complejidad cognitiva: 8
function manufacture(gifts, materials) {

    if (!gifts || !materials || gifts.length === 0) return [];

    let giftsMakeable = [];

    gifts.map(gift => {
        let giftBouilded = "";
        let flag = false;

        gift.split('').map(letter => {

            if (materials.includes(letter)) giftBouilded += letter;
            else {
                flag = true;
                return;
            }
        })

        if (!flag) giftsMakeable.push(giftBouilded);
    })

    return giftsMakeable;
}

// alternativa con filter, puntos: 240, Complejidad cognitiva: 6
function manufacture2(gifts, materials) {

    if (!gifts || !materials || gifts.length === 0) return [];

    const materialsSet = new Set(materials);

    return gifts.filter(gift => {
        for (let letter of gift) {
            if (!materialsSet.has(letter)) {
                return false;
            }
        }
        return true;
    });

}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'))