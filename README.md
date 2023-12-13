# AdventJS 2023, Mis Soluciones 🫠

# Reto #1: 🎁 ¡Primer regalo repetido!

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

```
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```

**`¡Ojo!`** Los elfos dicen que esto es una prueba técnica de Google.

# Reto #2: 🏭 Ponemos en marcha la fábrica

En el taller de Santa, los elfos tienen una **`lista de regalos`** que desean fabricar y un conjunto limitado de materiales.

Los _regalos son cadenas de texto_ y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una **`lista de los regalos que se pueden fabricar`**.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

```
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```

# Reto #3: 😏 El elfo travieso

En el taller de Santa, **`un elfo travieso`** ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación _original_ y la secuencia modificada _modified_ que puede incluir un paso extra o faltar un paso.

Tu tarea **`es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación`**. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

```
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```

A tener en cuenta:

-   Siempre habrá un paso de diferencia o ninguno.
-   La modificación puede ocurrir en cualquier lugar de la cadena.
-   La secuencia _original_ puede estar vacía

# Reto #4: 😵‍💫 Dale la vuelta a los paréntesis

En el taller de _Santa_ 🎅, algunos mensajes navideños han sido escritos de manera peculiar: **`las letras dentro de los paréntesis deben ser leídas al revés`**

**`Santa necesita que estos mensajes estén correctamente formateados`**. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que **`pueden existir paréntesis anidados`**, por lo que debes invertir los caracteres en el orden correcto.

```
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

Notas:

-   Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
-   En el mensaje final no deben quedar paréntesis.
-   El nivel máximo de anidamiento es 2.

# Creditos por las imagenes

1. <a href="https://www.flaticon.es/stickers-gratis/navidad" title="navidad stickers">Navidad stickers creadas por Stickers - Flaticon</a>

2. <a href="https://www.flaticon.es/iconos-gratis/chucheria" title="chuchería iconos">Chuchería iconos creados por Freepik - Flaticon</a>

# Reto #5: 🛷 El CyberTruck de Santa

Santa 🎅 está probando su nuevo trineo eléctrico, el _CyberReindeer_, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

```
. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
```

Ejemplo de carretera: `S...|....|.....`

Cada unidad de tiempo, **`el trineo avanza una posición a la derecha`**. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

**`Todas las barreras empiezan cerradas`**, pero después de 5 unidades de tiempo, se abren todas para siempre.

**`Crea una función que simule el movimiento del trineo`** durante un tiempo dado y `devuelva un array` de cadenas representando el estado de la carretera en cada unidad de tiempo:

```
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
```

El resultado es un **`array donde cada elemento muestra la carretera en cada unidad de tiempo`**.

Ten en cuenta que **`si el trineo está en la misma posición que una barrera`**, entonces toma su lugar en el array.

Los elfos se **`inspiraron en este reto de Code Wars`**.

# Reto #6: 🦌 Los renos de prueba

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto `movements` donde cada caracter representa la dirección del movimiento del reno:

```
> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
```

Por ejemplo, si el movimiento es `>>\*<`, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al **`finalizar todos los movimientos`**.

**`En el ejemplo anterior, la máxima distancia que recorre el reno es 2`**. Va a la derecha dos veces `+2`, luego con el `*` puede ir a la derecha otra vez para maximizar la distancia `+1` y luego va a la izquierda `-1`.

Crea una función `maxDistance` que reciba la cadena de texto `movements` y devuelva **`la máxima distancia`** que puede recorrer el reno **`en cualquier dirección`**:

```
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es **`el valor absoluto de la distancia recorrida máxima al finalizar los movimientos`**.

# Reto #7: 📦 Las cajas en 3D

Santa está experimentando con nuevos diseños de regalos y **`necesita tu ayuda para visualizarlos en 3D`**.

Tu tarea es escribir una función que, dado un tamaño `n` (entero), **`genere un dibujo de un regalo en 3D`** utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con `#` y las caras con el símbolo que nos pasan como parámetro:

```
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

Importante: Nos han dicho que **`siempre hay que dejar un salto de línea al final del dibujo`**.

**`Nota`**: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter `"`.
