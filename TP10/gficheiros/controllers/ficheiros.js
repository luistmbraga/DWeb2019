var Ficheiro = require('../models/ficheiros')

module.exports.listar = () => {
    return Ficheiro
        .find()
        .exec()
}