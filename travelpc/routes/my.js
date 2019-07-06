
const express = require('express');
const router = express.Router();
const path = require('path');
const formidable = require('formidable');
const me = require('../models/me');
const login = require('../middlewares/login');


router.get('/',function(req,res){
    me.find().then(function (results) {
        //console.log(results);
        res.render("my", {
            myInfo: req.myInfo,
            my: results
        });
    });
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
        var meIstance = new me(obj);
       //保存数据
       
       meIstance.save(function(err){
            if(err) throw err;
            console.log("保存成功");
        })
        //res.redirect('/my');
    })
})

//修改
router.get('/rewrit/:id', login,function (req, res) {
    // req.params.id
    //更具id查询数据
    me.findById(req.params.id, function (err, result) {
        if (err) throw err;
        res.render("my", {
            my: result
        })
    })
})
router.post('/rewrit/:id', function (req, res) {
    //解析数据
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        //组装数据
        var obj = {
            ...fields,
        }
        //判断数据图片有没有更新
        if (files.pic.name) { //图片更新
            obj.pic = "/" + path.basename(files.pic.path);
        } else { //图片没有更新  使用原来的图片

        }
        me.findByIdAndUpdate(req.params.id,obj,function(err){
            if(err) throw err;
            console.log("更新成功");
           
            res.redirect('/my');
        })
    })
})


module.exports = router;