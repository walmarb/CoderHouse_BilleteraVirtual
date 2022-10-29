const btnAgregar = document.querySelector("button.primary")

btnAgregar.addEventListener("click", agregarProducto)

const tbody = document.querySelector("tbody")

function armarHTML(producto) {
    return `<tr>
    <td id="productID">${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.categoria}</td>
                <td>${producto.importe}</td>
            </tr>`
}

function recorrerProductos() {
    tbody.innerHTML = ""
    if (productos.length > 0) {
        productos.forEach(producto => tbody.innerHTML += armarHTML(producto))
        generarListenerID()
    }
}

function generarListenerID() {
    const IDdeProductos = document.querySelectorAll("td#productID")
    if (IDdeProductos.length > 0) {
        IDdeProductos.forEach(productId => {
            productId.addEventListener("dblclick", (e) => {
                carrito.push(e.target.innerText)
            })
        })
    }
}

generadorAutomatico()

recorrerProductos()