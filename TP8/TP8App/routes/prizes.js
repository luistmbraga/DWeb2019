var express = require('express');
var router = express.Router();
var axios = require('axios')



router.get('/pesquisar', function(req,res){
  res.render('pesquisar')
})

// REQ: /prizes/categoria
router.get('/categorias', function(req,res){
  axios.get('http://localhost:3000/api/categorias')
    .then(dados => {res.render('lista-categorias', {lista: dados.data})})
    .catch(erro => {res.render('error', {error: erro})})
})

// REQ: /prizes/laureados
router.get('/laureados', function(req,res){
  axios.get('http://localhost:3000/api/laureados')
    .then(dados => {res.render('lista-laureados', {lista: dados.data})})
    .catch(erro => {res.render('error', {error: erro})})
})

//todos os premios    REQ: /prizes
// /prizes?...
router.get('/', function(req, res, next) {
  var cat = req.query.categoria
  var data = req.query.data

  if(cat){
    if(data != ''){
      axios.get('http://localhost:3000/api/premios?categoria='+cat+'&data='+data)
        .then(dados => {res.render('lista-premios', {lista: dados.data})})
        .catch(erro => {res.render('error', {error: erro})})
    }
    else{
      axios.get('http://localhost:3000/api/premios?categoria='+cat)
        .then(dados => {res.render('lista-premios', {lista: dados.data})})
        .catch(erro => {res.render('error', {error: erro})})
    }
  }
  else{
    axios.get('http://localhost:3000/api/premios')
      .then(dados => {res.render('lista-premios', {lista: dados.data})})
      .catch(erro => {res.render('error', {error: erro})})
  }
});

// detalhes de um premio REQ: /prizes/:idPrize
router.get('/:idPrize', function(req,res){
  axios.get('http://localhost:3000/api/premios/' + req.params.idPrize)
    .then(dados => {res.render('detalhes-premio', {lista: dados.data})})
    .catch(erro => {res.render('error', {error: erro})})
})

module.exports = router;
