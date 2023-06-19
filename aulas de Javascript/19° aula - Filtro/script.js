function myfunction()
{
let input, ul, li, a, filtro, i;
input = document.getElementById('meuinput');
filtro = input.value.toUpperCase();
ul = document.getElementById("myUl");
li = ul.getElementsByTagName('li'); 

for( i = 0; i < li.length; i++)
{
    a = li[i].getElementsByTagName("a")[0]
    if(a.innerHTML.toUpperCase().indexOf(filtro) > -1)
    {
        li[i].style.display = '';
    }

    else
    {
        li[i].style.display = 'none';
    }
}
}
