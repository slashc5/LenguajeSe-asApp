let numero1, numero2, operador, numero3
alert("Bienvenido en esta aplicacion podras sacar el precio del iva de cualquier juego de steam (siempre hablamos del precio actualizado que hoy en dia es el 65% de impuestos en argentina")
do {
    numero1 = parseFloat(prompt("ingrese el costo del juego al que desea sacar el iva"))
    numero2 = 65
    numero3 = 100
    resultadoIva = numero1 * numero2
    operador = prompt("Elija una de las siguientes opciones\nVer el precio total (1)\nVer el IVA (2)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }
}while ((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operador == "/")) 

switch(operador) {
    case "1":        
    alert(`El resultado del iva: ${resultadoIva/numero3+numero1}`)
    break
    case "2":
        alert(`El resultado del iva: ${resultadoIva/numero3}`)
        break
    default:
        alert("Operacion no valida") 
}