const express = require('express')

const router = express.Router();

var Filmes = require('../controllers/filmes')


router.get('/filmes', function(req, res){
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/filmes/:id', function(req, res){
    Filmes.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/filmes/generos/gen', function(req, res){
    var gen = req.query.gen
    Filmes.consultarGen(gen)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/filmes/listargeneros', function(req, res){
    Filmes.listarGenEQuantosHa()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/filmes/generos/atores/gen', function(req, res){
    var gen = req.query.gen
    Filmes.consultarAtoresGen(gen)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;