// OBJETOS, DEFINIR ATRIBUTOS Y ASIGNAR VALORES
// clave y valor 

var luis = {
    nombre: 'Luis',
    apellido: 'Guzmán',
    edad: 33
}

var jari = {
    nombre: "Jaribel",
    apellido: "Nova",
    edad: 28
}

function imprimirNombreEnMayuscula(nombre) { 
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

// mejorando la funcion 

function imprimirNombreEnMayuscula2(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

// otra forma por si no quieres crear una nueva variable

function imprimirNombreEnMayuscula3(persona) {
    console.log(persona.nombre.toUpperCase())
}

// NUEVA FORMA DE ECMASCRIPT Y UNA DE LAS QUE MÁS E ESTÁ USANDO
// en esta forma se le pasa el valor del objeto y se coloca en los parametros de la función

function imprimirNombreEnMayuscula4({ nombre }) {
    console.log(nombre.toUpperCase())
}

// para acceder a las claves del objeto se usa .nombre o .apellido o .edad, depende que valor que quieras

imprimirNombreEnMayuscula(luis.nombre)
imprimirNombreEnMayuscula2(jari)
imprimirNombreEnMayuscula3(luis)
imprimirNombreEnMayuscula4(jari)