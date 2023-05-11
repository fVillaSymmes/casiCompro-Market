const image = document.getElementById("imagen")
const price = document.getElementById("precio")
const model = document.getElementById("modelo")
const botonAlternativa = document.getElementById("botonAlternativa")

const laptop = {
    modelo: "Dell Xtrem 270",
    precio: "$3,990",
    imagen: "./assets/img/w800.png",
    plasmar: function () {
        image.src = this.imagen
        price.innerHTML = this.precio
        model.innerHTML = this.modelo
    },
    set setNuevoModelo(valor) {
        this.modelo = valor
    },
    set setNuevoPrecio(valor) {
        this.precio = valor
    },
    set setNuevaImagen(valor) {
        this.imagen = valor
    }
}

laptop.plasmar()

botonAlternativa.addEventListener("click", modeloAlternativo)

function modeloAlternativo() {
    laptop.setNuevoModelo = "Apple Macbook Air"
    laptop.setNuevaImagen = "./assets/img/15028801_1.jpg"
    laptop.setNuevoPrecio = "$999"
    laptop.plasmar()
}

