var metro = document.getElementById("metro");
var resultado = document.getElementById("resultado");
var multiplicacao;

function MULTIPLICACAO()
{
    multiplicacao = parseInt(metro.value) * 100;
    resultado.innerHTML = multiplicacao; 
}