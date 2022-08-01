let seña

let = nombreUsuario = prompt("Ingrese su nombre").toLowerCase()
let = apellidoUsuario = prompt("Ingrese su apellido").toLowerCase()
let = edadUsuario = parseInt(prompt("Ingrese su edad"))
let = alturaUsuario = parseFloat(prompt("Ingrese su altura"))

class Usuario {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    aumentarEdad(porcAumento) {
        this.edad += porcAumento
    }


    disminuirEdad(porcDisminucion) {
        this.edad -= porcDisminucion
    }

    aumentarAltura(nuevaAltura) {
        this.altura += nuevaAltura
    }

    disminuirAltura(bajarAltura) {
        this.altura -= bajarAltura
    }


}
const usuario0 = new Usuario(nombreUsuario, apellidoUsuario, edadUsuario, alturaUsuario)
const usuario1 = new Usuario("Sol", "Nievas", 19, 1.57)
const usuario2 = new Usuario("Lucas", "Mauricio", 27, 1.67)

const usuarios = [usuario1, usuario2, usuario0]

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
alert(nombreUsuario, "bienvenido")
alert("Te damos la Bienvenida")
do {
    seña = prompt("Bienvenidos al Proyecto ZEIT por favor ingresa una opcion:\n\n1 - Lenguaje de señas\n2 - Numeros Personalizados(36)\n3 - Otro lenguaje\n4 - Salir de la aplicacion - \n5 - Mi perfil - \n6 - Lista de usuarios")
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
        case '5':
            alert("A continuacion en la consola se mostrara tu perfil de usuario")
            console.log(usuario0)
            break;
        case '6':
            alert("A continuacion te mostraremos la lista de usuarios registrados")
            usuarios.forEach(usuario => {
                console.log(usuario)
            })
            break;
        default:
            console.log("No reconocimos ese comando :c")
            break;
    }
} while (seña != '6')
