const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const meSchema = new Schema({
    usname:{type:String, required:true},
    usbrithday:{type:String},
    ussex:{type:String},
    pic:String
});

const me = mongoose.model("me",meSchema);
module.exports = me;