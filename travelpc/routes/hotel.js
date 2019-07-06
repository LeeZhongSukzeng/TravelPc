const express = require('express');
const router = express.Router();
const hotel = require('../models/hotel');

router.get("/", function (req, res) {
    console.log(req.query.title);
    /**
     * 从数据库读取所有数据
     * limit(Number) 限制获取的数据条数
     * skip() 忽略数据的条数
     * 每页显示两条
     * 第一页：显示1-2条 忽略0条  （当前页-1）*limit
     * 第二页 3-4   2
     * 
     * page最小为1最大为总页数
     *  */
    var page = Number(req.query.page || 1);
    var limit = 2;
    hotel.count().then(function(count){
       // console.log("总页数"+count); 10
       //计算总页数 向上取整
       pages = Math.ceil(count/limit);
       //取值不能超过pages
       page = Math.min(page,pages);
        //取值不能小于1
        page = Math.max(page,1);

        var skip = (page - 1) * limit;

       hotel.find({"hotelName":new RegExp(req.query.title)}).limit(limit).skip(skip).then(function (results) {
        //console.log(results);
        res.render("hotel", {
            hotelInfo: req.hotelInfo,
            hotel: results,
            page: page,
            count:count,
            limit:limit,
            pages:pages
        });
    });
    });
});

module.exports = router;