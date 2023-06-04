//Le pido al usuario que ingrese su nombre, le muestro el menú y le pido que escriba el número de la opcción
let salir = false;
while (!salir) {
    let nombreIngresado = prompt("Escribí tu nombre.");
    let pregunta = prompt(`Hola ${nombreIngresado.toUpperCase()}, bienvenido/a a nuestro menú, podés:
1- Ver stock de libros.
2- Agregar a tus libros leídos.
3- Vender un libro.
4- Salir
(Escribí el número de la opción)`);
//Opción 1
    if (parseInt(pregunta) === 1) {
    prompt(`Los libros disponibles son:
    - "La maldición del mar" de Shea Ernshwan.
    - "Strange" de Alex Miréz.
    - "La mujer sin rostro" de Guillermo Fillat.
    - "Heartless" de Marissa Meyer.
    - "La revelación" de Ariana Godoy.`)
//Opción 2    
    } else if (parseInt(pregunta) === 2) {
    function librosLeidos() {
        let listaLibros = [];
        let finalizar = false;
        while (!finalizar) {
        let libroIngresado = prompt("Ingresa el nombre del libro que querés agregar, o ESC para finalizar.");
        if (libroIngresado.toUpperCase() === "ESC") {
            finalizar = true;
        } else {
            let autorIngresado = prompt("Ingresa el autor/a del libro.");
            let calificacion = parseInt(prompt("¿Cuánto te gustó del 1 al 5?"));
            //el libro como objeto
            const libroDelUsuario = {
            libro: libroIngresado,
            autor: autorIngresado,
            calificación: calificacion,
            };
            listaLibros.push(libroDelUsuario);
            console.log(libroDelUsuario);
            alert(`El libro ingresado es ${libroIngresado} de ${autorIngresado} y tiene una calificación de ${calificacion}/5.`);
        }
        }
    }
    librosLeidos();
//Opción 3
    } else if (parseInt(pregunta) === 3) {
    function venderLibro() {
        let libroXvender = prompt("Ingresa el nombre del libro que querés vender.");
        let autorDelLibro = prompt("Ingresa el autor/a del libro a vender.");
        let precioDelLibro = parseInt(prompt("Ingresa el precio al que lo querés vender."));
        //el libro como objeto
        const libroDelUsuario = {
        libro: libroXvender,
        autor: autorDelLibro,
        precio: precioDelLibro,
        };

    console.log(libroDelUsuario);
    }
    venderLibro();
//Opción 4
    } else if (parseInt(pregunta) === 4) {
    salir = true;
    alert(`¡Gracias ${nombreIngresado.toUpperCase()} por visitar nuestro sitio web!`);
//Opción 5, si no se ingresa un número del menú.
    } else {
    alert("Ingresá un número que pertenezca al menú.");
    }
}
