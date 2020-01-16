var mongoose = require('mongoose')


var filmeSchema = new mongoose.Schema({_id: String,
                                       title: String,
                                       year: String,
                                       cast: [String],
                                       genres: [String],
                                       });


module.exports = mongoose.model('filmes', filmeSchema)