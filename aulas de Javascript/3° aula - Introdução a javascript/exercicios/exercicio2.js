var dolar = document.getElementById("dolar");
var resultado = document.getElementById ("resultado");
var multiplicacao;

function MULTIPLICACAO()
{
    multiplicacao = parseInt(dolar.value) * 4.90;
    resultado.innerHTML = multiplicacao; 
}