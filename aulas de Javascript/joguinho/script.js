let vidaheroi
let ataquedoheroi
let xpdoheroi
let nivelheroi
let classesdosherois = ["Mago", "Ninja", "Vicking"]
let nomedoheroi
let mensagemdonome

nomedoheroi = document.getElementById("nomedopersonagem")
mensagemdonome = document.getElementById("mensagem")

function Enviar()
{
    if(nomedoheroi.value != "" ){
    mensagemdonome.innerHTML = "Olá, " + nomedoheroi.value + ". Seja bem vindo ao jogo"
}
else
{
    mensagemdonome.innerHTML = "Digite o seu nome para iniciarmos o jogo!"
}
}