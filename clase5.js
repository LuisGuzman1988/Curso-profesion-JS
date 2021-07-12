// Alcance de las funciones

// las variables pueden ser glabal o local, global es cuando no están definidas dentro de la funcion y puedes acceder a ellas desde cualquier parte. Es buena práctica saber lo qe quieres hacer al momento de difinir una variable si en global o local.

// con este ejemplo se modifica la varible global

var nombre = 'Luis'

function imprimirNombreEnMayuscula () {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula()

// Mejorando el codigo
// como parámetro se le puede pasar el mismo nombre de la variable que se encuentra en globla, javascript permite eso, es decir que en vez de (n) facilmente se le puede pasar (nombre) y de esta manera existe nombre tanto en local como global.

// hay que evitar todo efecto colateral al momento de definir las variables, por eso debemos tener claro que alcance queremos que estas tengan.

var nombre1 = 'Felipe'

function imprimirNombreEnMayuscula1(n) {
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayuscula1(nombre1)