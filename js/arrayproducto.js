const agregarProducto = () => {
    if (confirm("Deseas agregar un producto?")) {
        let nombreProducto = prompt("Nombre del producto:").toUpperCase()
        let categoriaProducto = prompt("Categoria del producto:").toUpperCase()
        let imorteProducto = prompt("Importe del producto:")
        if (nombreProducto === "") {
            console.warn("No se ingreso el nombre del producto")
        }
        else {
            productos.push(new Producto(nombreProducto, categoriaProducto, imorteProducto))
            listarProductos()
        }

    }

}

function listarProductos() {
    if (confirm("Deseas visualizar tus productos?")) {
        console.table(productos)
    }
}


function generadorAutomatico() {
    productos.push(new Producto("MANZANA", "ALIMENTOS", 50))
    productos.push(new Producto("PERA", "ALIMENTOS", 20))
    productos.push(new Producto("BANANA", "ALIMENTOS", 10))
    productos.push(new Producto("FIDEOS", "ALIMENTOS", 350))
    productos.push(new Producto("TRAPO DE PISO", "ALIMENTOS", 100))
    productos.push(new Producto("DETERGENTE", "ALIMENTOS", 150))
    productos.push(new Producto("HDMI", "TECNOLOGIA", 800))
    productos.push(new Producto("TV", "TECNOLOGIA", 370000))
    productos.push(new Producto("PARLANTE JBL", "TECNOLOGIA", 16000))
}

function recorrerProductos() {
    productos.forEach(producto => {
        console.log(producto)
    })
}

function buscarProducto() {
    if (confirm("Deseas buscar un producto")) {
        let buscar = prompt("Ingresa el nombre del producto a buscar:").toUpperCase()
        let resultado = productos.find(producto => producto.nombre.includes(buscar))
        if (resultado === undefined) {
            console.warn("No se encontró el producto")
        } else {
            console.log("Se encontro el siguiente producto en tus compras : " + resultado.nombre)
        }
    }

}

function filtrarProductos() {
    if(confirm("Deseas filtrar los productos?")){
        let categoria = prompt("Ingresa la categoria a filtrar:")
        let resultado = productos.filter(producto => producto.categoria  === categoria)
        console.table(resultado)
    }

}

function proyeccion() {
    let resultadoProyeccion = productos.map(producto => {
        return {
            nombreProducto: producto.nombre,
            importeIva: producto.importe * 0.21,
            importeFinal: producto.importe - (producto.importe * 0.21)
        }
    })
    console.table(resultadoProyeccion)
}


function ordenar() {
    if (confirm("Deseas ver los productos ordenados?")) {
        let productosOrdenados = productos.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1
            }
            if (a.nombre < b.nombre) {
                return -1
            }
            return 0
        })
        console.table(productosOrdenados)
    }

}