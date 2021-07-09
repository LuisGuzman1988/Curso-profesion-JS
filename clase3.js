// VARIABLES NUMERICAS

var nombre = 'Luis'
var apellido = 'Guzmán'
var edad = 32
var edad1 = 33

// incrementar en 1 la edad se llama 'INCREMENTO'

edad = edad + 1

// otra forma

edad1 += 1

var precioVino = 200.3

// var total  = precioVino * 3

var total = precioVino * 3

// las operaciones con decimales no son precisa, por lo que se debe hacer lo siguiente


var total1 = precioVino * 100 * 3 / 100

// otra forma un poco mas precisa
var total2 = Math.round(precioVino * 100 * 3) / 100

// si quieres elegir la cantidad de decimales que quieres

var total3 = total.toFixed(3)

// parse float el float se le llama a los numeros decimales

var total4 = parseFloat(total3)

// OPERADORES

/*

+=
-=


*/


