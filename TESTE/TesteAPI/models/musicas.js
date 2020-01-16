var mongoose = require('mongoose')


var musicaSchema = new mongoose.Schema({_id: String,
                                       "-id": String,
                                       titulo: String,
                                       subtitulo: String,
                                       tipo: [String],
                                       compositor: String,
                                       "info-relacionada":{
                                           video:{
                                                "-href": String
                                           }
                                       },
                                       arranjo: String,
                                       editado: String,
                                       instrumentos: {
                                           instrumento: [
                                               {
                                                   designacao: String,
                                                   partitura: {
                                                        "-clave": String,
                                                        "-voz":String,
                                                        "-type": String,
                                                        "-path": String,
                                                        "-afinacao": String
                                                   }
                                               }
                                           ]
                                       },
                                       });



module.exports = mongoose.model('musicas', musicaSchema)