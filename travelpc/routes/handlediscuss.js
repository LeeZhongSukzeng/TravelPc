const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const discuss = require('../models/discuss');
const login=require('../middlewares/login')

router.get('/delet/:id',function(req,res){
    discuss.findByIdAndRemove(req.params.id,function(err){
        if(err) throw err;
        console.log("数据库删除成功");
        fs.unlink(path.join(__dirname,"../",'uploads',req.query.img),function(err){
            if(err) throw err;
            console.log("图片删除成功");
        });
        res.redirect("/writdiscuss/discuss");
    })
})

module.exports = router;