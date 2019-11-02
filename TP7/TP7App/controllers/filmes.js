var Filme = require('../models/filme')

const Filmes = module.exports

var ObjectId = require('mongodb').ObjectID

Filmes.listar = () => {
    return Filme
        .find()
        .sort({title: 1})
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.consultar = fid => {
    return Filme
        .find(ObjectId(fid))
        .exec()
}

Filmes.projectar = campos => {
    return Filme
        .find({}, campos)
        .exec()
}

Filmes.inserir = dados => {
   
    var movie = new Filme(dados);
    console.log(movie);

    movie.save(function (err, filme) {
        if (err) return console.error(err);
        else
        console.log(filme.title + ' foi gravado com sucesso.')
    })
}

Filmes.apagar = fid => {
    Filme
    .deleteOne({_id: ObjectId(fid)}, (err, filme) => {
        if (err) return console.error(err);
        else
        console.log(fid + ' foi apagado com sucesso.')
    })   
}

Filmes.atualizar = (fid, dados) => {

    Filme.updateOne({_id: ObjectId(fid)}, {$set: dados}, (err, filme) =>{
        if (err) return console.error(err);
        else
        console.log(fid + ' foi atualizado com sucesso.')
    });
}

Filmes.agregar = campo => {
    return Filme
        .aggregate([{$group: {_id: "$" + campo, contador: {$sum: 1}}}])
        .exec()
}