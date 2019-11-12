const express = require('express')

const router = express.Router();

var Obras = require('../controllers/obras')


router.get('/compositores', function(req, res){
    Obras.listarCompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/:id', function(req, res){
    Obras.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/periodos', function(req, res){
    Obras.listarPeriodos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras', function(req, res){
    var com = req.query.compositor
    var dur = req.query.duracao
    var ano = req.query.ano
    var per = req.query.periodo

    if(com && dur){
        Obras.listarCompositorDuracao(com,dur)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(ano){
        Obras.listarAno(ano)
        .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(per){
        Obras.listarPeriodo(per)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Obras.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

module.exports = router;