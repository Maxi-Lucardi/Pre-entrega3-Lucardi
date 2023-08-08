function mostrarPrecios(elementos, textoCustom = "") {
    document.write("<h1> Contenido de precios " + textoCustom + " </h1>")
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
    })
    document.write("</ul>")
}

let precios = []

for (let i = 0; i <= 5; i++) {

    precios.push(parseInt(prompt("Ingrese un precio", 0)))
}

mostrarPrecios(precios)

console.log(precios)

precios.sort(function (a, b) { return a - b })

console.log(precios)

mostrarPrecios(precios, "Ordenados")

document.write(("<h1> La lista de precios tiene: " + precios.length + " diferentes precios"))

let busqueda = parseInt(prompt("busca un precio", 0))

let buscado = precios.findIndex(numero => numero == busqueda)

if (buscado && buscado != -1) {

    document.write(" </hr><h1> ENCONTRADO!! </h1>")
    document.write("<h1> Posicion de la busqueda: " + buscado + "</h1></hr>")
console.log("encontrado esta en la posicion " + buscado)
} else {
    document.write("</hr><h1> NO ENCONTRADO! </h1>")
console.log(" no encontrado ")
    
}
