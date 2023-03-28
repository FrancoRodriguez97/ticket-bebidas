let preciodebebida;
let cantidad;
let total = 0;
let seguir;
let nombreUser;

nombreUser = prompt("Bienvenido al  carrito!, ingrese su nombre de bedida");

do {
    do {
        precioBebida = parseFloat(prompt("Ingrese el precio del bebida"));
        if (preciodebebida <= 0) {
            alert("Precio invalido!");
        }

    } while (preciodebebida <= 0);

    cantidad = parseInt(prompt("Ingrese su cantidad"));
    while (cantidad <= 0) {
        cantidad = parseInt(prompt("cantidad invalida, vuelva a ingresarla"));
    }

    total = total + preciodebebida * cantidad;
    seguir = prompt("Desea ingresar otra bebida? s/n");

} while (seguir == 's');

alert(`El total para ${nombre} es: ${total}`);