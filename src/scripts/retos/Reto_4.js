// Puntos: 270, Complejidad cognitiva: 3
function decode(message) {
    const stack = [];
    let decode = '';

    for (const char of message) {
        if (char === '(') {
            stack.push(decode);
            decode = '';
        } else if (char === ')') {
            decode = stack.pop() + decode.split('').reverse().join('');
        } else {
            decode += char;
        }
    }

    return decode;
}

console.log(decode('sa(u(cla)atn)s'))