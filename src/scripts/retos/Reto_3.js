/**
 * Función que compara dos cadenas de texto y devuelve el primer carácter que es diferente
 * entre ellas. Si las cadenas son iguales, devuelve una cadena vacía. Si una cadena es más
 * larga que la otra, devuelve el primer carácter de la cadena más larga.
 * 
 * @param {string} original - La cadena original.
 * @param {string} modified - La cadena modificada.
 * @returns {string} - El primer carácter diferente entre las dos cadenas o una cadena vacía.
 */

// Puntos: 280, Complejidad cognitiva: 6
function findNaughtyStep(original, modified) {

    if (original === modified) return '';

    let length = Math.min(original.length, modified.length);

    for (let i = 0; i < length; i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i];
        }
    }

    return original.length > modified.length ? original[length] : modified[length];
}

const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'