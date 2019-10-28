var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var fs = require('fs')
var pug = require('pug')

var myDB = __dirname + "/../arquivoSonoro.json"
console.log(myDB)

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myDB, (erro, musicas)=>{
    if(!erro){
      res.render('index',{lista: musicas});
    }
    else{
        res.render('error', {error: erro})
    }
    res.end()
  })
})

router.get('/inserir', function(req, res, next) {
  res.render('inserir')
  res.end()
})

router.delete('/:id', function(req, res, next){
    var id = req.params.id;
    jsonfile.readFile(myDB, (erro, musicas)=>{
        if(!erro){
                musicas.splice(id, 1)
                jsonfile.writeFile(myDB, musicas, erro =>{
                    if(erro) console.log(erro)
                    else console.log('BD atualizada com sucesso.')
                })
                res.end('0')
        }
        else{
            console.log('Erro na leitura da BD...')
            res.end('1')
        }
    })
})

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  jsonfile.readFile(myDB, (erro, musicas)=>{
      if(!erro){
       
          var index = musicas[id];
         
          res.render('detalhes', {musica: index, id})
          res.end()
      }
      else{
          console.log('Erro na leitura da BD...')
          res.end('1')
      }
  })
})

router.get('/alterar/:id', function(req, res, next){
  var id = req.params.id;
  console.log('valor de id ' + req.params.id)
  jsonfile.readFile(myDB, (erro, musicas)=>{
      if(!erro){
          var index = musicas[id];
         
          res.render('alterar', {musica: index, id})
          res.end()
      }
      else{
          console.log('Erro na leitura da BD...')
          res.end('1')
      }
  })
})

router.post('/musica', function(req, res){
  jsonfile.readFile(myDB, (erro, musicas)=>{
    if(!erro){
      musicas.push(req.body)
      jsonfile.writeFile(myDB, musicas, erro => {
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso')
      })
    }
    else{
      console.log('Erro na leitura da BD...')
      res.end('1')
  }
  })
  res.redirect('/')
})

router.post('/:id', function(req, res, next){
  var id = req.params.id;
  console.log(req.body)
  jsonfile.readFile(myDB, (erro, musicas)=>{
      if(!erro){
        musicas[id].tit = req.body.tit;
        musicas[id].prov = req.body.prov;
        musicas[id].local = req.body.local;
        musicas[id].inst = req.body.inst;
        musicas[id].duracao = req.body.duracao;
        jsonfile.writeFile(myDB, musicas, erro => {
          if(erro) console.log(erro)
          else console.log('Registo gravado com sucesso')
        })
      }
      else{
          console.log('Erro na leitura da BD...')
          res.end('1')
      }
  })
  res.redirect('/')
})


module.exports = router;
