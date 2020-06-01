var x = document.getElementById("login");
var y = document.getElementById("cadastrar");
var z = document.getElementById("btn");
var usuario = document.getElementById("usuario");
var btnVoltar = document.getElementById("#container voltar");
//var agrvai = document.querySelector('usuario').value;
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
  //console.log("TO MANDO UM TAL DE:"+usuario.value);
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

function criarUsuarioo() {
  console.log("criando um");
  var usuarioo = document.getElementById("criarUsuario").value;
  usuario = usuarioo;
  var senha = CryptoJS.MD5(document.getElementById("criarSenha").value);
  var email = document.getElementById("criarEmail").value;
  var nome = document.getElementById("criarNome").value;
  var idade = document.getElementById("criarIdade").value;
  var telefone = document.getElementById("criarTelefone").value;
  console.log("To trabalhando:"+usuarioo+senha+email+nome+idade+telefone);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", window.location.origin+"/criarAluno/", true ); // false for synchronous request
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send( JSON.stringify({ "username": usuarioo, "password":senha.toString() ,"email":email,"nome":nome,"idade":idade,"telefone":telefone}) );
  xmlHttp.onreadystatechange = ()=>{
      if (xmlHttp.readyState===4) {
        //alert(JSON.parse(xmlHttp.response).id);//tras o ID
        document.cookie = `{"idAluno":"`+JSON.parse(xmlHttp.response).id+`"}`;
        //alert("cookie:"+document.cookie);
        window.location.href = '/exercicio'; 
      }
  }
}