var Pub = require('../models/pubs')

var ObjectId = require('mongodb').ObjectID


module.exports.listarITYT = () => {
    return Pub.find({},{_id: false, id: true, title:true, year:true, type:true}).exec()
}

module.exports.consultar = id => {
    console.log(id)
    return Pub.findOne({id: id}).exec()
}

module.exports.listarTypes = () => {
    return Pub.aggregate([{$group: {_id: "$type"}}]).exec()
}

module.exports.procurarTypeYYY = type => {
    return Pub.find({type: type}).exec()
}

module.exports.procurarTypeYear = (type,year) => {
    return Pub.find({$and: [{type: type}, {year: {$gt: year}}]}).exec()
}

module.exports.listarAutores = () => {
    return Pub.aggregate([{$unwind: "$authors"},{$sort: {authors: 1}},{$project: {_id:false, authors: true}}]).exec()
}


module.exports.procurarPubs = autor => {
    return Pub.aggregate([{$unwind: "$authors"},{$match: {authors: autor}}]).exec()
}