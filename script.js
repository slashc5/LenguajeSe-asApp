const boton1 = document.getElementById("boton1")
const boton3 = document.getElementById("boton3")
const boton5 = document.getElementById("boton5")



// la funcion de los eventos vendria a ser que cuando el usuario toque click en el boton se muestre el contenido html figurado abajo
boton1.addEventListener('click', () => {
    bodyPa.innerHTML = `     <div><h2>Diccionario de lenguaje de señas</h2>
    <article>
    <h2> Te dejo una imagen para poder familiarizarte con el lenguaje y ponerlo en practica.</h2>
    <img src="./images/depositphotos_209132638-stock-illustration-vector-language-of-deaf-mutes.jpg" alt="">
</article>    <div clas"botonOriginal">
    <a id="boton2" href="./index.html" class="btn btn-primary">Ya me lo aprendi, volvamos atras</a></div>`

})
boton3.addEventListener('click', () => {
    bodyPa.innerHTML = `     <div><h2>Esta opcion estara disponible pronto...</h2>
    <a id="boton4" href="./index.html" class="btn btn-primary">Podriamos volver para atras :c?</a>`
})
boton5.addEventListener('click', () => {
    bodyPa.innerHTML = `<form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>`
})
