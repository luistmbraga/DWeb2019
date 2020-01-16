var Musica = require('../models/musicas')


module.exports.listarObras = () => {
    return Musica.find({},{_id: false, id: true, titulo:true, tipo:true, compositor:true}).exec()
}

module.exports.consultarObraId = id => {
    return Musica.find({"-id": id}).exec()
}

module.exports.listarTipos = () => {
    return Musica.aggregate([{$group: {_id: "$tipo"}}]).exec()
}

module.exports.consultarObrasComp = comp => {
    return Musica.find({compositor: comp}).exec()
}


module.exports.consultarObrasInst = inst => {
    return Musica.find({ "instrumentos.instrumento": { $elemMatch : { "designacao" : inst } }}).exec()
}


module.exports.listarObrasQuant = () => {
    return Musica.aggregate([{$unwind: "$instrumentos.instrumento"}, {$group: {_id: "$-id", titulo: {$first: "$titulo"},"partituras": {$sum: 1}}}]).exec()
}
