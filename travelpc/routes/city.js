const express = require('express');
const router = express.Router();

router.get("/",function(req,res){
    res.render("city");
});

router.post('/',function(req,res){

});

module.exports= router;