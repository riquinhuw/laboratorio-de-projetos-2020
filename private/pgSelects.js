const { Client } = require('pg');
const dbConfig = require('./dbconfig.js');
require('dotenv/config');

const client = new Client(dbConfig);
client.connect();


exports.buscarAlunos = async (req, res) => {
  const response = await client.query('SELECT * FROM alunos');
  res.status(200).send(response.rows);
}

exports.buscarTreinos = async (req, res) => {
  const response = await client.query('SELECT * FROM treinos');
  res.status(200).send(response.rows);
}

exports.criarALuno = async (req, res) => {
  const { username,password,email,nome,idade,telefone } = req.body;
  const { rows } = await client.query(
    "INSERT INTO alunos (username,password,email,nome,idade,telefone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id",
    [username,password,email,nome,idade,telefone]
  );
  //console.log(username+password+email+nome+idade+telefone);
  console.log("retorno de ID:"+rows[0].user_id);
  var retornoId=rows[0].user_id;
  //res.send(retornoId);
  res.status(201).send({"id":retornoId,"suscesso":true});
};

exports.buscarAlunoId = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  const response = await client.query('SELECT * FROM alunos WHERE user_id = $1', [alunoId]);
  res.status(200).send(response.rows);
}

exports.buscarTreinoId = async (req, res) => {
  const treinoId = parseInt(req.params.id);
  const response = await client.query('SELECT * FROM alunos WHERE treino_id  = $1', [treinoId]);
  res.status(200).send(response.rows);
}

exports.buscarTreinosPorAlunoId = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  const response = await client.query('SELECT * FROM alunos_treinos WHERE aluno_id  = $1', [alunoId]);
  res.status(200).send(response.rows);
}

exports.buscarAlunoPorLogin = async (req, res) => {
  const usuario = req.params.usuario;
  //console.log("USUARIO:"+usuario.user_id);
  const response = await client.query('select * from alunos where username = $1', [usuario]);
  //var testePeloAmor = response.rows;
  //console.log("TROUXE ISSO BB"+testePeloAmor[0]);
  res.status(200).send(response.rows);
}

exports.alterarDadosPessoais = async (req, res) => {
  const alunoId = parseInt(req.params.id);
  const email = req.params.email;
  const telefone = req.params.telefone;
  const nome = req.params.nome;
  // console.log(alunoId+email+telefone+nome);
  const response = await client.query(`update alunos set nome = $4 ,email= $3 ,telefone = $2 where user_id = $1`, [alunoId,telefone,email,nome]);
  //console.log(response);
  res.status(201).send("Criado");
}
