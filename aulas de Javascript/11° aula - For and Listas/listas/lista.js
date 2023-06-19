let produto = document.getElementById("produto")

function aperte(){
   
    {
        //criar um elemento li

    let li = document.createElement("li")
    let texto = document.createTextNode(produto.value)

    //criar um texto

    li.appendChild(texto)

    //adicionar o li na MINHA LISTA

    document.getElementById("minhalista").appendChild(li)

        }
    
}

