function logueo() {
    if (nombreApellido == null) {
        nombreApellido = prompt("Ingresa tu nombre y apellido")
        console.log("Bienvenid@", nombreApellido, "a su billetera virtual")
    } else {
        console.log("Ya te encuentras logueado", nombreApellido)
    }
}

// Funcion para cargar los ingresos mensuales
function cargarIngresos() {
    validarLogueo()
    //En un principio se setea la variable SeguirCarga en true
    let flagCargaIngresos = true

    do {

        ingreso = prompt("Carge su ingeso mensual")

        //Se valida que se haya ingresado un valor correcto
        if (isNaN(ingreso)) {
            console.warn("Valor ingresado no valido")
            ingreso = 0;
        } else {
            ingresoMensual = parseFloat(ingreso) + parseFloat(ingresoMensual)
        }

        flagCargaIngresos = confirm("Desea seguir cargando ingesos?")

        if (flagCargaIngresos == false) {
            mostrarIngresosMes()
        }

    } while (flagCargaIngresos == true);

}

// Funcion para cargar los egresos mensuales
function cargarEgresos() {
    
    let flagCargaEgresos = true

    do {
        egresos = prompt("Ingresar gastos")
        //Se valida que se haya ingresado un valor correcto
        if (isNaN(egresos)) {
            console.warn("Valor ingresado no valido")
            egresos = 0;
        } else {
            egresosTotales = parseFloat(egresos) + parseFloat(egresosTotales)
        }

        flagCargaEgresos = confirm("Desea seguir cargando gastos?")

        if (flagCargaEgresos == false) {
            mostrarEgresosMes()
        }

    } while (flagCargaEgresos == true);
}

function mostrarIngresosMes() {
    console.log("Tu ingreso mensual es de:", ingresoMensual)
}

function mostrarEgresosMes() {
    console.log("Tu egreso mensual es de:", egresosTotales)
}

function mostrarBalanceMensual(){
    console.log("Tu balance mensual es de", ingresoMensual - egresosTotales)
}

function validarLogueo() {
    if (nombreApellido == null) {
        logueo()
    }
}

function salir() {
    if (nombreApellido == null) {
        nombreApellido = console.log("Aun no te encuentras loguead@")
    } else {
        console.log("Gracias por usar nuestros servicios. Hasta luego!!")
        nombreApellido = null;
    }
}







