var express = require('express');
var router = express.Router();
var axios = require('axios')

var apiKey = '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'

router.get('/', function(req,res){
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias'+apiKey)
    .then(dados => {res.render('index', {lista: dados.data})})
    .catch(erro => {res.render('error', {error: erro})})
})

router.get('/:id', function(req,res){
  var elementos;
  var dono;
  var participante;
  var dadosTop;

  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+req.params.id +apiKey) //1
    .then(dados => {
                    dadosTop = dados.data;
                    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '/elementos' +apiKey) //2
                    .then(dados => {
                                    elementos = dados.data;
                                    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+req.params.id +'/intervencao/dono'+apiKey) //3
                                      .then(dados => {
                                                      dono = dados.data;
                                                      axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+req.params.id+'/intervencao/participante'+apiKey) //4
                                                        .then(dados => {
                                                          participante = dados.data;
                                                          //res.jsonp({de: dadosEnt, t: tipologias, d: dono, p: participante})
                                                          res.render('tipologia', {dt: dadosTop, e: elementos, d: dono, p: participante})
                                                        })
                                                        .catch(erro => {res.render('error', {error: erro})})
                                      })
                                      .catch(erro => {res.render('error', {error: erro})})
                    })
                    .catch(erro => {res.render('error', {error: erro})})
          })
    .catch(erro => {res.render('error', {error: erro})})

        })

router.get('/ent/:id', function(req, res){
  var entInfo;
  var entTipo;

  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id + apiKey) //1
        .then(dados => {
                        entInfo = dados.data;
                        axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/tipologias'+apiKey) //2
                          .then(dados => {
                            entTipo = dados.data;
                            //res.jsonp({de: dadosEnt, t: tipologias, d: dono, p: participante})
                            res.render('entidade', {eI: entInfo, eT: entTipo})
                          })
                          .catch(erro => {res.render('error', {error: erro})})
        })
        .catch(erro => {res.render('error', {error: erro})})
})

module.exports = router;
