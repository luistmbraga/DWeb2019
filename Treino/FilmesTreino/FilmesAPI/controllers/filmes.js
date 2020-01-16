var Filme = require('../models/filmes')

var ObjectId = require('mongodb').ObjectID

module.exports.listar = () => {
    return Filme.find().exec()
}

module.exports.consultar = id => {
    return Filme.findOne(ObjectId(id)).exec()
}

module.exports.listarGenEQuantosHa = () => {
    return Filme.aggregate([{$unwind: "$genres"}, {$group: {_id: "$genres", contador: {$sum: 1}}}]).exec()
}

module.exports.consultarGen = gen => {
    return Filme.aggregate([{$unwind: "$genres"}, {$match: {genres: gen}}, {$project: {_id:false, title: true}}]).exec()
}

module.exports.consultarAtoresGen = gen => {
    return Filme.aggregate([{$unwind: "$genres"}, {$unwind: "$cast"}, {$match: {genres: gen}}, {$group: {_id: "$cast"}}]).exec()
}