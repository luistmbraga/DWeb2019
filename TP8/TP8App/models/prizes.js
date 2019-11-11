var mongoose = require('mongoose')

var laureateSchema = new mongoose.Schema({id: Number, 
                                          firstname:String,
                                          surname: String,
                                          motivation: String,
                                          share: Number})

var prizeSchema = new mongoose.Schema({_id: String, 
                                       year: Number,
                                       category: String, 
                                       overallMotivation: String, 
                                       laureates: [laureateSchema]});

module.exports = mongoose.model('prizes', prizeSchema)