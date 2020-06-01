var x = document.getElementById("exercicio");
var y = document.getElementById("exercicioant");
var k = document.getElementById("meuperfil");
var z = document.getElementById("btn");
var biscoito = JSON.parse(document.cookie); 
var buttonElement = document.querySelector('exercicio exercicio');
var getUrl = window.location;
var listTipoTreino= {};
//var listaExercicio = document.querySelector('#bloco-exercicio exercicio');

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

function direcionarHome() {
    window.location.href = '/'; 
  }


function listarTreinosWeb(rota)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", rota, true ); // false for synchronous request
    xmlHttp.send( null );
    xmlHttp.onreadystatechange = ()=>{
        if (xmlHttp.readyState===4) {
            //console.log("busquei");
            //console.log(biscoito.idAluno);
            //console.log(xmlHttp.responseText);
            recebido = JSON.parse(xmlHttp.responseText);
            recebido.forEach(treino => {//Varrendo a lista de treinos
                if(!treino.realizado){//Se o treino não foi realizado
                    var checkbox1 = document.createElement('input');//
                    checkbox1.setAttribute('type','checkbox');
                    checkbox1.setAttribute("class","checkbox");
                    x.appendChild(checkbox1);
                    var textCamp = document.createElement('input');//
                    textCamp.setAttribute('type','text');
                    textCamp.setAttribute("class","input-exe");
                    textCamp.setAttribute("readonly","true");
                    listTipoTreino.forEach(tipo => {
                        if(tipo.treino_id==treino.treino_id){
                            textCamp.value=(tipo.nome);
                        }
                        
                    });
                    x.appendChild(textCamp);
                }else{
                    var textCamp = document.createElement('input');//
                    textCamp.setAttribute('type','text');
                    textCamp.setAttribute("class","input-exe");
                    textCamp.setAttribute("readonly","true");
                    listTipoTreino.forEach(tipo => {
                        if(tipo.treino_id==treino.treino_id){
                            textCamp.value=(tipo.nome);
                        }
                    });
                    y.appendChild(textCamp); 
                }

            });
            
            var btnOk = document.createElement('button');//
            btnOk.setAttribute('type','submit');
            btnOk.setAttribute("class","submit-btne");
            btnOk.appendChild(document.createTextNode("OK"));
            x.appendChild(btnOk);

            return xmlHttp.responseText;
        }
    }

}

function carregarTreino() {
    //z.appendChild(document.createElement('p'));
    var recebi = listarTreinosWeb(getUrl.origin+"/buscarTreinosPorAluno/"+biscoito.idAluno);
    //console.log(recebi);
}

function getTreinos() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", getUrl.origin+"/listarTreinos/", true ); // false for synchronous request
    xmlHttp.send( null );
    xmlHttp.onreadystatechange = ()=>{
        if (xmlHttp.readyState===4) {
            listTipoTreino= JSON.parse(xmlHttp.responseText);
            console.log("Lista de treinos carregada.");
            carregarTreino();
            return "Carregado";
        }
    }
}

function carregarPerfil()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", getUrl.origin+"/buscarAluno/"+biscoito.idAluno, true ); // false for synchronous request
    xmlHttp.send( null );
    xmlHttp.onreadystatechange = ()=>{
        if (xmlHttp.readyState===4) {
            //console.log("busquei");
            //console.log(biscoito.idAluno);
            //console.log(xmlHttp.responseText);
            recebido = JSON.parse(xmlHttp.responseText);
            document.getElementById("inputNome").value= recebido[0].nome;
            document.getElementById("inputEmail").value= recebido[0].email;
            document.getElementById("inputTelefone").value= recebido[0].telefone;
            return xmlHttp.responseText;
        }
    }

}

function atualizarPerfil() {
    console.log("tô tentando atualizar");
    console.log(biscoito.idAluno+document.getElementById("inputNome").value+document.getElementById("inputTelefone").value+document.getElementById("inputEmail").value);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", getUrl.origin+"/updateCliente/"+biscoito.idAluno+"&"+document.getElementById("inputNome").value+"&"+document.getElementById("inputTelefone").value+"&"+document.getElementById("inputEmail").value, true ); // false for synchronous request
    xmlHttp.send( null );
    xmlHttp.onreadystatechange = ()=>{
        if (xmlHttp.readyState===4) {
            console.log("Cadastro Atualizado");
            return "Atualizado";
        }
    }
    alert("Cadastro Atualizado");
}

getTreinos();
carregarPerfil();