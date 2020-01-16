const express = require('express')

const router = express.Router();

var Musicas = require('../controllers/musicas')


router.get('/tipos', function(req, res){
    Musicas.listarTipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/:id', function(req, res){
    Musicas.consultarObraId(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obrasQuant', function(req, res){
    Musicas.listarObrasQuant()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras', function(req, res){
    var comp = req.query.compositor
    var inst = req.query.instrumento

    if(inst){
        Musicas.consultarObrasInst(inst)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(comp){
        Musicas.consultarObrasComp(comp)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Musicas.listarObras()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

module.exports = router;