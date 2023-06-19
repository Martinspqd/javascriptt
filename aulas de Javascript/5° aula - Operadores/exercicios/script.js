let Recebervalor = document.getElementById("recebevalor")
let resultado = document.getElementById("parOuImpar")

function PAR()
{
    if(Recebevalor.value % 2 == 0)
    {
        resultado.innerHTML = "par"}
        
    else{
            resultado.innerHTML = "impar"
        }
}