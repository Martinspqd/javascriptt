var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var N3 = document.getElementById("N3");
var N4 = document.getElementById("N4");

function SOMA()
{
    soma = parseInt (N1.value) * parseInt (N2.value) * parseInt (N3.value) * parseInt (N4.value);
    resultado.innerHTML = soma; 
}