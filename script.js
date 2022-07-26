document.getElementById("botonF").style.visibility = "hidden"

// con el stringify la idea seria acumular las imagenes aprendidas del usuario y enviarlas en forma de texto como un resultado
const imagenes = {
    id: 1,
    imagen: "seña"
}
const enJSON = JSON.stringify(imagenes)
console.log(enJSON)


// constantes de eventos
const boton1 = document.getElementById("boton1")
const botonF = document.getElementById("botonF")
const imagen2 = `    <h2>Te presentamos el lugar de aprendizaje donde podras ponerte en practica repasando los diferentes tipos de señas para poder comunicarte, ademas si te sentis confiado podras realizar un pequeño examen!</h2>
<figure class="lenguaje">
<div class="lenguaje2">
    <img src="./images/2.gif" alt="">
    <img src="./images/3.gif" alt="">
    <img src="./images/4.gif" alt="">
</div>
<div class="lenguaje3">
    <img src="./images/5.gif" alt="">
    <img src="./images/6.gif" alt="">
    <img src="./images/7.gif" alt="">
</div>
<div class="lenguaje4">
    <img src="./images/8.gif" alt="">
    <img src="./images/9.gif" alt="">
    <img src="./images/giphy.gif" alt="">
</div>
</figure>
<div>
<button>
<a class="botonAtras" id="boton3" href="./index.html" class="btn btn-primary">Volver para atras
</button></a>
</div>
`

let imagenesExamen = ["1_.gif", "2_.gif", "3_.gif", "4_.gif", "5_.gif", "6_.gif", "7_.gif", "8_.gif", "9_.gif", "10_.gif"];
let imgExamen = document.querySelector("#examen img");
imgExamen.src = "./images/sin_respuesta/" + imagenesExamen[Math.floor(Math.random()*imagenesExamen.length)];
generarImagen.addEventListener('click', () => {
    imgExamen.src = "./images/sin_respuesta/" + imagenesExamen[Math.floor(Math.random()*imagenesExamen.length)]; //"./images/1.gif"
});

// evento aprendizaje de imagenes
// boton1.addEventListener('click', () => {
//     bodyPa.innerHTML = `<div><img src="./images/giphy.gif" alt=""></div>
//     <div><button><a class="botonAtras" id="boton3" href="./index.html" class="btn btn-primary">Volver para atras</button></a></div>`
//     document.getElementById("botonF").style.visibility = "visible"
//     document.getElementById("examen").style.visibility = "hidden"
// })
// mostrado de imagenes y desactivacion de botones html
boton1.addEventListener('click', (

) => {
    bodyPa.innerHTML = imagen2
    document.getElementById("botonF").style.visibility = "hidden"
    document.getElementById("botonesDark1").style.visibility = "hidden"
    document.getElementById("examen").style.visibility = "hidden"
})

// localstorage DarkMode
if (localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', "light")
}

if (darkMode == "dark") {
    document.body.classList.add("darkMode")
}

// boton dark mode y light modee
const botonDark = document.getElementById('botonDarkMode')
const botonLight = document.getElementById('botonLightMode')

// evento del boton darkkMode
botonDark.addEventListener('click', () => {
    document.body.classList.add("darkMode")
    localStorage.setItem('darkMode', "dark")
    Toastify({
        text: "Tu tema se a guardado con exito!",
        className: "info",
        style: {
            background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(188,244,255,1) 0%, rgba(27,201,236,1) 0%, rgba(2,0,36,1) 0%,",
        }
    }).showToast();
})

botonLight.addEventListener('click', () => {
    document.body.classList.remove("darkMode")
    localStorage.setItem('darkMode', "light")
    Toastify({
        text: "Tu tema se a guardado con exito!",
        className: "info",
        style: {
            background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(188,244,255,1) 0%, rgba(27,201,236,1) 0%, rgba(2,0,36,1) 0%,",
        }
    }).showToast();
})
let botonPatas = document.getElementById("tiene")

// Estos eventos son para mostrar la alerta swal fire
patas4.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Muy Bien!',
        text: 'Gracias. Hemos guardado tu informacion correctamente',
        footer: '<a href="">Seguinos</a>'
    });
})
 
patas2.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: '¡Que mal!',
        text: 'Una lastima :c, para eso te recomendamos un repaso en la seccion de aprendizaje',
        footer: '<a href="">Seguinos</a>'
    });
})

