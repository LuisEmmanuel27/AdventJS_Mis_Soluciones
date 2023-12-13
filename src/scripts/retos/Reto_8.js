// Puntos: 230, Complejidad cognitiva: 7
function organizeGifts(gifts) {
    let organizedGifts = '';
    let currentNumber = 0;
    let currentGift = '';

    for (let char of gifts) {
        if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + parseInt(char, 10);
        } else if (/[a-z]/.test(char)) {
            currentGift = char;
        }

        if (currentNumber > 0 && currentGift) {
            const pallets = Math.floor(currentNumber / 50);
            const boxes = Math.floor((currentNumber % 50) / 10);
            const bag = currentNumber % 10;

            const giftString = `[${currentGift}]`.repeat(pallets)
                + `{${currentGift}}`.repeat(boxes)
                + (bag > 0 ? `(${currentGift.repeat(bag)})` : '');

            organizedGifts += giftString;

            currentNumber = 0;
            currentGift = '';
        }
    }

    return organizedGifts;
}

console.log(organizeGifts('76a11b33c'));
