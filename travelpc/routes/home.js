const express = require('express');
const router = express.Router();

router.get("/",function(req,res){
    res.render("home");
});

router.post('/',function(req,res){

});


module.exports= router;