const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/travelpc');
const Schema = mongoose.Schema;
const HotelcitySchema = new Schema({
    hotelid:Number,
    hotelimg:String,
    hotelname:String,
    hotelplace:String,
    hotelinfo:String,
    hotelmoney:Number,

});

const Hotelcity = mongoose.model("hotelcity",HotelcitySchema);
var hotellist=new Hotelcity(
    {
    "hotelid":01,
    "hotelimg":"https://dimg10.c-ctrip.com/images/fd/hotel/g6/M09/C8/58/CggYtFch0y2AGIF-AAQ3hbvugsA861_R_200_200.jpg",
    "hotelname":"北京国图宾馆",
    "hotelplace":"海定区中关村南大街33号",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":428,
},{
    "hotelid":02,
    "hotelimg":"https://dimg11.c-ctrip.com/images/200a0x000000kw9tg6B9A_R_225_168.jpg",
    "hotelname":"161酒店",
    "hotelplace":"北京北海四合院店",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":648,
},{
    "hotelid":03,
    "hotelimg":"https://dimg04.c-ctrip.com/images//hotel/924000/923170/62802aabadd34068b465532575325784_R_200_200.jpg",
    "hotelname":"彩虹云霄酒店",
    "hotelplace":"曼谷.水门市场",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":596,
},{
    "hotelid":04,
    "hotelimg":"https://dimg04.c-ctrip.com/images//200l0c00000065b0e967F_R_200_200.jpg",
    "hotelname":"曼谷素坤逸大酒店",
    "hotelplace":"曼谷.素坤逸",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":452,
},{
    "hotelid":05,
    "hotelimg":"https://dimg04.c-ctrip.com/images//t1/hotel/1051000/1050320/b60a6d7152ca4dd7bbee4e09197cecc4_R_200_200.jpg",
    "hotelname":"巴尔舒格凯宾斯基酒店",
    "hotelplace":"莫斯科",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":1226,
},{
    "hotelid":06,
    "hotelimg":"https://dimg04.c-ctrip.com/images//20020j000000ahne33D15_R_200_200.jpg",
    "hotelname":"阿尔巴特美居酒店",
    "hotelplace":"莫斯科",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":615,
},{
    "hotelid":07,
    "hotelimg":"https://dimg12.c-ctrip.com/images/200h070000002iy1016B9_R_200_200.jpg",
    "hotelname":"台南NIK家家民宿",
    "hotelplace":"中西区民族路三段36号",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":369,
},{
    "hotelid":08,
    "hotelimg":"https://dimg12.c-ctrip.com/images/200f0a00000056hgv035A_R_200_200.jpg",
    "hotelname":"三道门建筑文创旅店",
    "hotelplace":"台南中西区成功路77号",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":606,
},{
    "hotelid":09,
    "hotelimg":"https://dimg04.c-ctrip.com/images//fd/hotelintl/g4/M02/5F/BE/CggYHVaBZcuAa5_UAAFy8RE-ALw956_R_200_200.jpg",
    "hotelname":"纽约中央公园怕克莱恩酒店",
    "hotelplace":"纽约.中城西区",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":1148,
},{
    "hotelid":10,
    "hotelimg":"https://dimg04.c-ctrip.com/images//220e0f0000007hrqf99F4_R_200_200.jpg",
    "hotelname":"纽约瑞吉酒店",
    "hotelplace":"纽约.纽约市中心",
    "hotelinfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
    "hotelmoney":5506,
}
)


hotellist.save();

module.exports = Hotelcity;
