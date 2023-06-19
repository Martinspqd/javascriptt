let numero = document.getElementById("numero");
let dias = document.getElementById("dias");

function aperte()
{
    switch(numero.value)
        {
            case "1":
                dias.innerHTML = "Final de semana"
                break;
            case "2":
                dias.innerHTML = "Dia útil"
                break;
            case "3":
                dias.innerHTML = "Dia útil"
                break;
            case "4":
                dias.innerHTML = "Dia útil"
                break;
            case "5":
                dias.innerHTML = "Dia útil"
                break;
            case "6":
                dias.innerHTML = "Dia útil"
                break;
            case "7":
                dias.innerHTML = "Final de semana"
                break;

            default:
            dias.innerHTML = "Dia inválido"
            break;
        }
}

