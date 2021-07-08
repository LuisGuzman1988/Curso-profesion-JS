// VARIABLES STRINGS

var nombre = 'Luis'
var apellido = 'Guzmán'

//convertir en mayusculas
var nombreEnMayusculas = nombre.toUpperCase()
// convertir en minusculas
var apellidoEnMinusculas = apellido.toLowerCase()
// saber la posicion de un caracter
var primeraLetraNombre = nombre.charAt(0)
// saber la cantidad de letras de tu nomre
var cantidadLetrasNombre = nombre.length

// concatenar texto

var nombreCompleto = nombre + ' ' + apellido

// interpolacion de texto // tambien se puede escribir codigo js dentro
var nombreCompletoModerno = `${nombre} ${apellido.toUpperCase()}`

// acceder a un sub string, es decir un string dentro de otro // 'str' significa string
// se le asigna el desde donde y hasta donde quieres que llegue el sub string

var str = nombre.substr(0, 3)




