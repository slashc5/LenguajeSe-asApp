let miUsuario = prompt("Ingrese su nombre por favor")
let miUsuario2 = prompt("Ingrese su apellido por favor")
let miUsuario3 = prompt("ahora ingrese su edad por favor")
let miUsuario4 = prompt("y por ultimo ingrese su genero por favor")
class Usuario {
    constructor(id, nombre, apellido, edad, genero) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.genero = genero
    }
}
const usuario1 = new Usuario(1, "Martin", "Nievas", 20, "Masculino")
const usuario2 = new Usuario(2, "Jorge", "Ilaichi", 25, "Masculino")
const usuario3 = new Usuario(3, "Anthony", "Sparda", 28, "Masculino")
const usuario4 = new Usuario(4, "Luz", "Lilia", 30, "Femenino")
const usuario0 = new Usuario(0, miUsuario, miUsuario2, miUsuario3, miUsuario4)

const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario0]

const divUsuarios = document.getElementById("divUsuarios")

function menuSeña() {
    alert("En este menu se van a mostrar señas que podrias usar para comunicarte!\n\n👋🏼 - Hola, chau \n✋🏼🤛🏼 - Chocar\n ✋🏼👈🏼 - ¿Qué?\n 🤷🏽‍♀️ - No sé")
}

function miPerfil() {
    console.log("Te mostramos tu perfil a continuacion")
}

do {
    seña = prompt("Bienvenidos al Proyecto ZEIT por favor ingresa una opcion:\n\n1 - Lenguaje de señas\n2 - Mi Perfil")
    switch (seña) {
        case '1':
            menuSeña();
            break;
        case '2':
            miPerfil();
            usuarios.forEach(usuario => {
                divUsuarios.innerHTML = `
                <div><h2>Bienvenido a continuacion te dejamos tu perfil de usuario :D</h2></div>
                <div class="card" id="usuario${usuario.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">nombre: ${usuario.nombre}</h5>
                <p class="card-text">apellido: ${usuario.apellido}</p>
                <p class="card-text">edad: ${usuario.edad}</p>
                <p class="card-text">genero: ${usuario.genero}</p>
            </div>
            </div>
                `
            })
            break;
        default:
            console.log("No reconocimos ese comando :c")
            break;
    }
} while (seña != '2')
