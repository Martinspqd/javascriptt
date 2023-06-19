let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2")
let nota3 = document.getElementById("nota3")
let media
let resultado = document.getElementById("resultado")

function CLICKAR(){
    soma = parseInt (nota1.value) + parseInt (nota2.value) + parseInt (nota3.value);
    resultado.innerHTML = soma/3; 

    if (resultado.value >= 7 )
    {
        alert("aprovado")
    }
    else
    {
        alert("reprovado")
    }
}