for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

///sumar los numeros que ingresa el usuario hasta que ingrese un 0
/// NO SE la cantidad de veces que voy a iterar

let suma = 0;
let numero;

numero = parseInt(prompt("ingrese un valor"));
while (numero != 0) {
    suma = suma + numero;
    numero = parseInt(prompt("Ingrese un valor"));
}