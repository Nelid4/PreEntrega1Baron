let salir = false;
while (!salir) {
    let nombreIngresado = prompt("Escribe tu nombre.");
    let pregunta = prompt(`Hola ${nombreIngresado.toUpperCase()}, bienvenido/a a nuestro menú. Puedes elegir una de las siguientes opciones:
  1. Ver stock de libros.
  2. Agregar un libro a tus libros leídos.
  3. Vender un libro.
  4. Salir
  (Escribe el número de la opción)`);

    let opcion = parseInt(pregunta);

    switch (opcion) {
        case 1:
            alert(`Los libros disponibles son:
      - "La maldición del mar" de Shea Ernshwan.
      - "Strange" de Alex Miréz.
      - "La mujer sin rostro" de Guillermo Fillat.
      - "Heartless" de Marissa Meyer.
      - "La revelación" de Ariana Godoy.`);
            break;

        case 2:
            function librosLeidos() {
                let listaLibros = [];
                let finalizar = false;

                while (!finalizar) {
                    let libroIngresado = prompt("Ingresa el nombre del libro que quieres agregar, o ESC para finalizar.");

                    if (libroIngresado.toUpperCase() === "ESC") {
                        finalizar = true;
                    } else {
                        let autorIngresado = prompt("Ingresa el autor/a del libro.");
                        let calificacion = parseInt(prompt("¿Cuánto te gustó del 1 al 5?"));

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
            break;

        case 3:
            function venderLibro() {
                let libroXvender = prompt("Ingresa el nombre del libro que quieres vender.");
                let autorDelLibro = prompt("Ingresa el autor/a del libro a vender.");
                let precioDelLibro = parseInt(prompt("Ingresa el precio al que quieres venderlo."));

                const libroDelUsuario = {
                    libro: libroXvender,
                    autor: autorDelLibro,
                    precio: precioDelLibro,
                };

                console.log(libroDelUsuario);
            }

            venderLibro();
            break;

        case 4:
            salir = true;
            alert(`¡Gracias ${nombreIngresado.toUpperCase()} por visitar nuestro sitio web!`);
            break;

        default:
            alert("Ingresa un número que pertenezca al menú.");
            break;
    }
}