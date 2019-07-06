const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const discussSchema = new Schema({
    content:{type:String,required:true},
    publishAt:{type:Date,default:Date.now()},
    pic:String
});

const discuss = mongoose.model("discuss",discussSchema);

module.exports = discuss;
