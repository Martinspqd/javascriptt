//AddEventListener()
/*Elemento.addEventListener(event,function) */

let botao = document.getElementById("myBTN")
botao.addEventListener('click', mudaralerta);

function mudaralerta()
{
    alert("Hello world!")
}