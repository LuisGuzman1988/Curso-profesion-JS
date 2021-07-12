// OBJETOS, DEFINIR ATRIBUTOS Y ASIGNAR VALORES


var luis = {
    nombre: 'Luis',
    apellido: 'Guzmán',
    edad: 33
}

function imprimirNombreEnMayuscula(nombre) { 
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

// para acceder a las claves del objeto se usa .nombre o .apellido o .edad, depende que valor que quieras

imprimirNombreEnMayuscula(luis.nombre)