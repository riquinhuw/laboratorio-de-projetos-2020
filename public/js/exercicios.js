var x = document.getElementById("exercicio");
var y = document.getElementById("exercicioant");
var k = document.getElementById("meuperfil");
var z = document.getElementById("btn");

function exercicio(){
    x.style.left = "0px"; //clicar aqui para voltar para a posição
    y.style.left = "600px";
    k.style.left = "600px";
    z.style.left ="10px";
    
}

function exercicioant(){
    x.style.left = "600px"; // quando alguem clicar em cadastrar o login vai embora
    y.style.left = "0px";
    k.style.left = "600px";
    z.style.left = "180px";
}

function meuperfil(){
    x.style.left = "600px"; // quando eu clicar em teste ele vai embora
    y.style.left = "600px";
    k.style.left = "0px";
    z.style.left = "320px";
}
