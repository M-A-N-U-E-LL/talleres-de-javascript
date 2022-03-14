
const inputPrice = document.getElementById("Input-price"),
      inputDiscount = document.getElementById("Input-discount"),
      inputCupon = document.getElementById("Input-cupon"),
      ButtonResultado = document.getElementById("button-resultado"),
      MostrarResultado = document.getElementById("resultado");


function calcularPrecioConDescuentoY_Cupones(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = (100 - descuento) - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

ButtonResultado.addEventListener("click", botonCalcularPrecio);

function botonCalcularPrecio() {
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const cuponValue = inputCupon.value;

    const precioConDescuento = calcularPrecioConDescuentoY_Cupones(priceValue, discountValue, cuponValue);

    MostrarResultado.innerHTML = precioConDescuento + "$";
}

document.addEventListener("keyup", eventoConTecla);

var teclas = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

var numbers = {
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
};

function eventoConTecla(evento) {

    switch (evento.keyCode) {

        case teclas.ENTER:
            botonCalcularPrecio();
        break;

        case teclas.UP:
            botonCalcularPrecio();
        break;

        case teclas.DOWN:
            botonCalcularPrecio();
        break;

        // Evento con algunas teclas
        case numbers.ZERO:
            botonCalcularPrecio();
        break;

        case numbers.ONE:
            botonCalcularPrecio();
        break;

        case numbers.TWO:
            botonCalcularPrecio();
        break;

        case numbers.THREE:
            botonCalcularPrecio();
        break;

        case numbers.FOUR:
            botonCalcularPrecio();
        break;

        case numbers.FIVE:
            botonCalcularPrecio();
        break;

        case numbers.SIX:
            botonCalcularPrecio();
        break;

        case numbers.SEVEN:
            botonCalcularPrecio();
        break;
        
        case numbers.EIGHT:
            botonCalcularPrecio();
        break;

        case numbers.NINE:
            botonCalcularPrecio();
        break;
    }
}

// De esta manera podemos ver cada evento que sucede
// function eventoConTecla(evento) {
//     console.log(evento);
// }


