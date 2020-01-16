var mongoose = require('mongoose')



var pubSchema = new mongoose.Schema({_id: String,
                                       type: String,
                                       id: String,
                                       authors: [String],
                                       title: String,
                                       booktitle: String,
                                       address: String,
                                       year: String,
                                       month: String,
                                       doi: String 
                                       });


module.exports = mongoose.model('pubs', pubSchema)