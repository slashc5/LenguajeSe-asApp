let seña

function menuSeña() {
    alert("En este menu se van a mostrar señas que podrias usar para comunicarte!\n\n👋🏼 - Hola, chau \n✋🏼🤛🏼 - Chocar\n ✋🏼👈🏼 - ¿Qué?\n 🤷🏽‍♀️ - No sé")
}

function personalizadoPalabra() {
    opcion2 = parseFloat(prompt("ingrese un numero"))
    if (opcion2 == 36) {
        opcion2 = console.log("la palabra traducida seria ''Hola''");
    } else {
        console.log("Has ingresado un numero invalido")
    }
}

function cambiarLenguaje() {
    alert("Por el momento esto se encuentra en mantenimiento")
}
do {
    seña = prompt("Bienvenidos al Proyecto ZEIT por favor ingresa una opcion:\n\n1 - Lenguaje de señas\n2 - Numeros Personalizados(36)\n3 - Otro lenguaje\n4 - Salir de la aplicacion")
    switch (seña) {
        case '1':
            menuSeña();
            break;
        case '2':
            personalizadoPalabra();
            break;
        case '3':
            cambiarLenguaje();
            break;
        case '4':
            console.log("Nos vemos la proxima! :D");
            break;
        default:
            console.log("No reconocimos ese comando :c")
            break;
    }
} while (seña != '4')
