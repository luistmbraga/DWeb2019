var Obra = require('../models/obras')

var ObjectId = require('mongodb').ObjectID

//obras
module.exports.listar = () => {
    return Obra.find().exec()
}

//obras/:id
module.exports.consultar = id => {
    return Obra.find({_id: id}).exec()
}

module.exports.listarAno = ano => {
    //return Obra.aggregate([{$match: {anoCriacao: ano}}]).exec()
    return Obra.find({anoCriacao: ano}).exec()
}

module.exports.listarCompositorDuracao = (com,dur) => {
    
    return Obra.find({$and: [{compositor: com}, {duracao: {$gt: dur}}]}).exec()
}

module.exports.listarPeriodo = per => {
    //return Obra.aggregate([{$match: {periodo: per}}]).exec()
    return Obra.find({perido: per}).exec()
}

module.exports.listarCompositores = () => {
    return Obra.aggregate([{$group: {_id: "$compositor"}}]).exec()
}

module.exports.listarPeriodos = () => {
    return Obra.aggregate([{$group: {_id: "$periodo"}}]).exec()
}