var x = document.getElementById("login");
var y = document.getElementById("cadastrar");
var z = document.getElementById("btn");
var usuario = document.getElementById("usuario");
var btnVoltar = document.getElementById("#container voltar");
var agrvai = document.querySelector('usuario').value;
//btnVoltar.onclick("direcionarHome();");
btnVoltar.setAttribute('onclick','direcionarHome()');

function cadastrar(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";

}

function direcionarHome() {
    window.location.href = '/'; 
  }

function direcionarExercicio() {
  console.log("TO MANDO UM TAL DE:"+usuario.value);
  //alert(usuario.value);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", window.location.origin+"/login/"+usuario.value, true ); // false for synchronous request
  xmlHttp.send( null );
  xmlHttp.onreadystatechange = ()=>{
      if (xmlHttp.readyState===4) {
        console.log("resposta:"+xmlHttp.responseText);
        var retorno = JSON.parse(xmlHttp.responseText);
        //alert(retorno[0].user_id);
        document.cookie = `{"idAluno":"`+retorno[0].user_id+`"}`;
        window.location.href = '/exercicio'; 
      }
  }
   
 }
