//Eventos
/*No Javascript, eventos são ações ou ocorrências que acontecem na página Web que estamos implementando. Esses eventos geralmente invocam funções que irão executar as operações desejadas. Exemplo de eventos são: o usuário clica em um botão na página.*/ 

/*Exemplos de eventos:
- Clicar no mouse
- Quando a página é carregada
- Quando uma imagem foi carregada
-Quando o mouse passa sobre o elemento
-Quando um formulário HTML é enviado.*/

let none = document.getElementById('abc')
function mudar()
{
    none.innerHTML = 'São os alunos de Santo Amaro S2';
}

let datadehoje = document.getElementById('demo')
function Data()
{
    datadehoje.innerHTML = Date();
}


function carregarAviso()
{
    alert('Você acessou a página')
}


let objeto = document.getElementById("objeto")
function mudardefrase()
{
    objeto.innerHTML = 'obrigado!'
}

function voltarafrase()
{
    objeto.innerHTML = "passe o mouse aqui!"
}