let x = document.getElementById("valorinicial");
let y = document.getElementById("valorfinal");

function contar()
{
    while(parseInt(x.value) <= parseInt(y.value))
{
    let paragrafo = document.createElement("p") 

    let texto = document.createTextNode(x.value);

    paragrafo.appendChild(texto);

    document.getElementById("contar").appendChild(paragrafo)
    console.log(x)
    x.value++ //(x = x + 1)
}
}

