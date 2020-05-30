const express = require('express');
const path = require('path');
const axios = require('axios').default;
const app = express();
const selects = require('./private/pgSelects.js');
const routes = require('./routes');
require('dotenv/config');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
// app.use(express.static('public'));
// Rotas para renderizar as pagians Webs
app.use(routes);

// EndPoints
app.get('/listarAlunos',selects.buscarAlunos);

app.get('/listarTreinos',selects.buscarTreinos);

app.get('/buscarTreinosPorAluno/:id',selects.buscarTreinosPorAlunoId);

app.get('/buscarAluno/:id',selects.buscarAlunoId);

app.get('/buscarTreino/:id',selects.buscarTreinoId);

app.post('/criarAluno',selects.criarALuno);//precisa de um json

app.get('/login/:usuario',selects.buscarAlunoPorLogin);

var dia = new Date();
console.log("Iniciando a API TecFit. "+String(dia.getDate()).padStart(2, '0')+"/"+String(dia.getMonth() + 1).padStart(2, '0')+"/"+dia.getFullYear()+" "+dia.getHours()+":"+dia.getMinutes()+":"+dia.getSeconds());


app.listen(process.env.PORT || 3333, ()=>{
  console.log('Listen in port 3333.')
});