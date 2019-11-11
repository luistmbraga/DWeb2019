var Prize = require('../models/prizes')

var ObjectId = require('mongodb').ObjectID

module.exports.listar = () => {
    return Prize.aggregate([{$project: {year: true, category:true}},{$sort: {year:-1}}]).exec()
}

module.exports.consultar = id => {
    return Prize.findOne(ObjectId(id)).exec()
}

module.exports.listarCategorias = () => {
    return Prize.aggregate([{$group: {_id: "$category"}}, {$sort: {category: 1}}]).exec()
}

module.exports.listarPremiosPorCategoria = cat => {
    return Prize.aggregate([{$match: {category: cat}}, {$sort: {year:-1}}]).exec()
}

module.exports.listarCategoriaAno = (cat,ano) => {
    return Prize.aggregate([{$match: {category: cat, year: {$gt: ano}}}, {$sort: {year:-1}}]).exec()
}

module.exports.listarLaureados = () => {
    return Prize.aggregate([{$unwind:"$laureates"}, {$sort: {"laureates.firstname":1, "laureates.surname":1}}, {$project : {_id: false, "laureates.firstname":true, "laureates.surname": true, year:true, category:true}}])
           .exec()
}