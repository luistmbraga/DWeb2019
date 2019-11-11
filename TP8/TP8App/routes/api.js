const express = require('express')

const router = express.Router();

var Prizes = require('../controllers/prizes')


router.get('/laureados', function(req, res){
    Prizes.listarLaureados()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/premios/:id', function(req, res){
    Prizes.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/categorias', function(req, res){
    Prizes.listarCategorias()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/premios', function(req, res){
    var cat = req.query.categoria
    var data = req.query.data
    console.log(req.query)
    console.log(req.params)
    if(cat){
        if(data){
            Prizes.listarCategoriaAno(cat,data)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
        }
        else{
            Prizes.listarPremiosPorCategoria(cat)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
        }
    }
    else{
        Prizes.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

module.exports = router;