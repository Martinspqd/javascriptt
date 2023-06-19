//let car = "Fiat"
let mostrar = document.getElementById('mostrar')

let car =
{
    nome: "Fiat",
    cor: "Vermelho",
    modelo: "Uno"
}

const aluno = 
{
    PrimeiroNome: 'Johan',
    SegundoNome: 'Carlos',
    Idade: '18',
    Nacionalidade: 'Bolívia'
}

mostrar.innerHTML = aluno.PrimeiroNome


const pessoa =
{
    PrimeiroNome: "Brunão",
    SegundoNome: "Ruiz",
    id:335214,
    fullName: function()
    {
        return this.PrimeiroNome + " " + this.SegundoNome
    }
}


//vetores

let cor = ["azul", "vermelho"]
const tarefas =
[
    {
        id: 1, 
        Texto: 'Levar o lixo para fora',
        Completado: true,     
    },
    {
        id: 2,
        Texto: 'Encontrar com o chefe',
        Completado: true,
    },
    {
        id: 3,
        Texto: 'Consulta no dentista',
        Completado: false,
    }

]

tarefas.forEach(teste)


function teste(tarefas)
{
    console.log(tarefas.texto)
}

































