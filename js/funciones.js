function prueba(){

    let quien = ["Mi amiga", "Mi amigo", "Mi perrita", "Mi hermano"];

    let accion = ["Come", "Compra", "Rompe", "Arregla"];

    let porque = ["En mi trabajo", "En mi teléfono", "En mi coche"];

    let cuando = ["Después de la clase", "Mientras estoy durmiendo", "Mientras hago ejercicios", "Durante la comida", "Mientras compro"];

    let x = Math.floor((Math.random() * quien.length));

    let x2 = Math.floor((Math.random() * accion.length));

    let x3 = Math.floor((Math.random() * porque.length));

    let x4 = Math.floor((Math.random() * cuando.length));

    document.getElementById("excusas").innerHTML = quien[x] + " " + accion[x2] + " " + porque[x3] + " " + cuando[x4];

}