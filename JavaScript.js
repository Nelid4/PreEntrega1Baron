let nombreIngresado = prompt("Escribí tu nombre.")
let pregunta = prompt(`Hola ${nombreIngresado.toUpperCase()}, bienvenidx a nuestro menú, podés:
1- Ver stock de libros.
2- Agregar a tus libros leidos.
3- Vender un libro.
4- Salir
Escribí el número de la opción`)
console.log(pregunta)
switch(pregunta){
    case 1:
}




















// function venderLibro() {
//     const libro = prompt("¿Qué libro quieres vender? ");
//     const precio = prompt("¿A cuánto lo vas a vender? ");
//     console.log("Has ingresado el libro: " + libro + " a un precio de " + precio + " dólares.");
// }

// function comprarLibro() {
//     console.log("No hay libros en stock.");
// }

// function guardarLibro() {
//     const nombre = prompt("Ingresa el nombre del libro: ");
//     const autor = prompt("Ingresa el autor del libro: ");
//     const calificacion = prompt("¿Cuánto te gustó el libro? (1 al 5): ");
//     console.log("Has guardado el libro: " + nombre + " del autor " + autor + " con una calificación de " + calificacion + ".");
// }

// // Menú principal
// let opcion = "";
// while (opcion !== "salir") {
//     opcion = prompt("¿Qué deseas hacer? (vender, comprar, guardar, salir): ");
    
//     switch (opcion) {
//         case "vender":
//             venderLibro();
//             break;
//         case "comprar":
//             comprarLibro();
//             break;
//         case "guardar":
//             guardarLibro();
//             break;
//         case "salir":
//             console.log("Saliendo del programa.");
//             break;
//         default:
//             console.log("Opción inválida. Por favor, intenta nuevamente.");
//             break;
//     }
// }
