const API_KEY = "e662d719bb1abd05306f4250772a137d"
const hClima = document.getElementById("hClima")
const form = document.getElementById("idForm")



form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("ciudad").style.visibility = "hidden"
    document.getElementById("pais").style.visibility = "hidden"
    document.getElementById("provincia").style.visibility = "hidden"
    document.getElementById("buscar").style.visibility = "hidden"
    localStorage.setItem('Clima', "Ciudad")
    const datForm = new FormData(e.target)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get("ciudad")},${datForm.get("provincia")},${datForm.get("pais")}&limit=1&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const {
                lat,
                lon,
                name: nombre,
                state: provincia,
                country: pais
            } = data[0]
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${API_KEY}`)
                .then(response => response.json())
                .then(({
                    weather,
                    main
                }) => {

                    console.log(main)
                    console.log(weather)

                    hClima.innerHTML = `
                <div>
                    <h2>Clima en ${nombre}, ${provincia}, ${pais}</h2>
                    <p>Temperatura: ${main.temp} °C</p>
                    <p>Sensacion Termica: ${main.feels_like} °C</p>
                    <p>Presion: ${main.pressure} hPa</p>
                    <p>Humedad: ${main.humidity}%</p>
                    <p>Descripcion: ${weather[0].description}</p>
                </div>
            
            `
                })
        })
})
