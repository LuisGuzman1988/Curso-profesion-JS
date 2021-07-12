// FUNCIONES

// funciones sin parametros

var nombre = 'Luis', edad = 33

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad()

// a las funciones se le deberia pasar parametros como abajo

var nombre1 = 'Felipe', edad1 = 33

function imprimirEdad1(n, e) {
    console.log(`${n} tiene ${e} años de edad`)
}

imprimirEdad1(nombre1, edad1)
imprimirEdad1('Luis', 33)
imprimirEdad1('Jaribel', 28)
imprimirEdad1('Patri', 35)