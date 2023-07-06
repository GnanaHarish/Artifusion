const mongoose = require('mongoose');

const artifusinSchema = new mongoose.Schema({
    phrase : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    pubId : {
        type : String,
        required : true
    }
});


module.exports = mongoose.model('Post', artifusinSchema);

