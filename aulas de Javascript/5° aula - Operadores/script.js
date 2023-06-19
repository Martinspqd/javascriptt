let resultadoSoma = document.getElementById("soma")
let resultadoSub = document.getElementById("subtracao")
let resultadoMulti = document.getElementById("multiplicacao")
let resultadoDiv = document.getElementById("divisao")
let resultadoPot = document.getElementById("potencia")
let resultadoMod = document.getElementById("modulo")


let x;
let y;
let z;

x = 10;
y = 2;
z = x + y;

resultadoSoma.innerHTML = z;



let a = 7;
let b = 4;
let c = a - b;
 
resultadoSub.innerHTML = c;

let d = 6;
let e = 7;
let f = d * e;

resultadoMulti.innerHTML = f;


let h = 70;
let r = 9;
let g = h / r;

resultadoDiv.innerHTML = g;

let j = 8;
let i = 2;
let u = j**2

resultadoPot.innerHTML = u;

let v = 5;
let w = 2;
let l = v % w;

resultadoMod.innerHTML = l;

