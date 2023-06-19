let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let operador = document.getElementById("operador")
let apresentacao = document.getElementById("mostrar")

function clicar()
{
    switch(operador.value)
    {
        case "+": 
            apresentacao.innerHTML = parseInt(valor1.value) + parseInt(valor2.value)
            break

        case "-": 
            apresentacao.innerHTML = parseInt(valor1.value) - parseInt(valor2.value)
            break
        case "*": 
            apresentacao.innerHTML = parseInt(valor1.value) * parseInt(valor2.value)
            break
        case "/": 
            apresentacao.innerHTML = parseInt(valor1.value) / parseInt(valor2.value)
            break
    }
}