var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')

/* GET home page. */
router.get('/', function(req, res) {
  Filmes.listar()
    .then(dados => res.render('index', {lista: dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/inserir', function(req, res){
  res.render('inserir')
  res.end()
})

router.get('/:idFilme', function(req, res) {
  Filmes.consultar(req.params.idFilme)
    .then(dados => res.render('detalhesFilme', {lista: dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/alterar/:idFilme', function(req, res) {
  Filmes.consultar(req.params.idFilme)
    .then(dados => res.render('alterar', {lista: dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/:idFilme', function(req, res){
  Filmes.apagar(req.params.idFilme);
  res.end('0');
})

router.post('/filme', function(req, res){
  console.log(req.body);
  Filmes.inserir(req.body);
  res.redirect('/filmes/');
})

router.put('/:idFilme', function(req, res){
  console.log(req.params.idFilme);
  console.log(req.body);
  Filmes.atualizar(req.params.idFilme, req.body);
  console.log('Filme: ' + req.params.idFilme + ' atualizado');
})

module.exports = router;
