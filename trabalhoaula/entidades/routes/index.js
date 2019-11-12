var express = require('express');
var router = express.Router();
var axios = require('axios')

var apiKey = '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ'
/* GET home page. */
//http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ

router.get('/', function(req,res){
  axios.get('http://clav-api.dglab.gov.pt/api/entidades'+apiKey)
    .then(dados => {res.render('index', {lista: dados.data})})
    .catch(erro => {res.render('error', {error: erro})})
})

router.get('/:id', function(req,res){
  var tipologias;
  var dono;
  var participante;
  var dadosEnt;

  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id +apiKey) //1
    .then(dados => {
                    dadosEnt = dados.data;
                    axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/tipologias' +apiKey) //2
                    .then(dados => {
                                    tipologias = dados.data;
                                    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id +'/intervencao/dono'+apiKey) //3
                                      .then(dados => {
                                                      dono = dados.data;
                                                      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/intervencao/participante'+apiKey) //4
                                                        .then(dados => {
                                                          participante = dados.data;
                                                          //res.jsonp({de: dadosEnt, t: tipologias, d: dono, p: participante})
                                                          res.render('entidade', {de: dadosEnt, t: tipologias, d: dono, p: participante})
                                                        })
                                                        .catch(erro => {res.render('error', {error: erro})})
                                      })
                                      .catch(erro => {res.render('error', {error: erro})})
                    })
                    .catch(erro => {res.render('error', {error: erro})})
          })
    .catch(erro => {res.render('error', {error: erro})})

        })

module.exports = router;
