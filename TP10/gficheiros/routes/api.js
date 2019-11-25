var express = require('express');
var router = express.Router();
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiros')
const fs = require('fs')
var multer = require('multer')
var upload = multer({dest: 'uploads/'})


/* GET users listing. */
router.get('/ficheiros', function(req, res) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/*
router.post('/ficheiros', upload.single('ficheiro'), function(req, res){

  let oldPath = __dirname + '/../'+req.file.path
  let newPath = __dirname + '/../public/ficheiros/'+req.file.originalname

  fs.rename(oldPath, newPath, function(err){
    if(err) throw err
  })

  let data = new Date()

  let novoFicheiro = new Ficheiro({
    data: data.toISOString(),
    desc: req.body.desc,
    name: req.file.originalname,
    path: newPath,
    mimetype: req.file.mimetype,
    size: req.file.size
  })

  novoFicheiro.save(function(err, ficheiro){
    if(!err) console.log('Ficheiro guardado com sucesso!')
    else console.log('ERRO:'+err)
    res.redirect('/')
  })


})*/


router.post('/ficheiros', upload.array('ficheiro'), function(req, res){

  var length = req.files.length;
  
  for(var i = 0; i < length; i++){

    let oldPath = __dirname + '/../'+req.files[i].path
    let newPath = __dirname + '/../public/ficheiros/'+req.files[i].originalname

    fs.rename(oldPath, newPath, function(err){
      if(err) throw err
    })

    let data = new Date()

    let novoFicheiro = new Ficheiro({
      data: data.toISOString(),
      desc: req.body.desc[i],
      name: req.files[i].originalname,
      path: newPath,
      mimetype: req.files[i].mimetype,
      size: req.files[i].size
    })

    novoFicheiro.save(function(err, ficheiro){
      if(!err) console.log('Ficheiro guardado com sucesso!')
      else console.log('ERRO:'+err)
      
    })

  }

  res.redirect('/')
})

module.exports = router;
