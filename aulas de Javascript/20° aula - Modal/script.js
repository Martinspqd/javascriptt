let modal = document.getElementById("mymodal")
let btn = document.getElementById("mybtn")
let span = document.getElementsByClassName("close")[0]

btn.addEventListener("click", Abrir)

function Abrir()
{
    modal.style.display = "block"
}

span.addEventListener("click", Fechar)

function Fechar()
{
    modal.style.display = "none"
}

