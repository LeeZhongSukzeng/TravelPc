const express = require('express');
const router = express.Router();
const path = require('path');
const formidable = require('formidable');
const discuss = require('../models/discuss');
const login = require('../middlewares/login');

router.get('/',login,function(req,res){
    res.render("writdiscuss");
})

router.post('/',function(req,res){
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname,"../","uploads");
    form.parse(req,function(err,fields,files){
        if(err) throw err;
        //组装数据
        var obj={
            ...fields,
            pic: "/" + path.basename(files.pic.path)
        }
        var discussIstance = new discuss(obj);
       //保存数据
       //discussIstance.save();
       discussIstance.save(function(err){
            if(err) throw err;
            console.log("保存成功");
        })
        res.redirect('/writdiscuss/discuss');
    })
})

router.get('/discuss',function(req,res){
    //获取数据库数据
    discuss.find({},function(err,results){
        if(err) throw err;
        res.render('discuss',{arr:results})
    })
})

module.exports = router;