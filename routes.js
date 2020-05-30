const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/entrar',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/entrar.html'));
});

router.get('/exercicio',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/exercicio.html'));
});

router.get('/rotas',(req,res)=>{
  res.sendFile(path.join(__dirname+'/public/rotas.html'));
});
module.exports= router;