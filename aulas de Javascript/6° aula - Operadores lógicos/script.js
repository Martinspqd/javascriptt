let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");
let resultado = document.getElementById("resultado");

function clickar()
{
    if(idade.value >= 16 && titulo.value == "Sim")
    {
        alert("Você poderá votar")
    }

    else
    {
        alert("Você não poderá votar")
    }
}

let minutos;
let preco;

if(minutos <= 200)
{
    preco = 0.20
}
else
{
        if(minutos <= 400)
        {
            preco = 0.18
        }
}