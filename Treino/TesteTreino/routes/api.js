const express = require('express')

const router = express.Router();

var Pubs = require('../controllers/pubs')


router.get('/autores', function(req, res){
    Pubs.listarAutores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/pubs/:id', function(req, res){
    console.log(req.params.id)
    Pubs.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/types', function(req, res){
    Pubs.listarTypes()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/pubs', function(req, res){
    var atr = req.query.autor
    var tp = req.query.type
    var yer = req.query.year

    if(tp && yer){
        Pubs.procurarTypeYear(tp, yer)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(tp){
        Pubs.procurarTypeYYY(tp)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else if(atr){
        Pubs.procurarPubs(atr)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Pubs.listarITYT()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

module.exports = router;