// Puntos: 260, Complejidad cognitiva: 4
function drawGift(size, symbol) {
    let box = ''
    const endLines = []

    box += ' '.repeat(size - 1)
        + '#'.repeat(size)
        + '\n'
    endLines.push(box.trim())

    if (size > 2) {
        const sizeLineTwo = size - 2
        const lineTwo = ' '.repeat(sizeLineTwo)
            + '#'
            + symbol.repeat(size - 2)
            + '##\n'
        box += lineTwo

        endLines.push(lineTwo.trim())

        let j = 1
        for (let i = 3; i < size; i++) {
            let currentLine = ' '.repeat(size - i)
                + '#'
                + symbol.repeat(size - 2)
                + '#' + symbol.repeat(j) + '#\n'
            box += currentLine
            endLines.push(currentLine.trim())
            j++
        }

        const middleLine = '#'.repeat(size)
            + symbol.repeat(size - 2)
            + '#\n'
        box += middleLine

    } else if (size > 1) {
        return ' '
            + '##\n'
            + '###\n'
            + '##\n'
    } else {
        return '#\n'
    }

    return box + endLines.reverse().join('\n') + '\n'
}

drawGift(10, '%')