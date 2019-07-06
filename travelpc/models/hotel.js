const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hotelSchema = new Schema({
   hotelId:Number,
   hotelImg:String,
   hotelName:String,
   hotelPlace:String,
   hotelInfo:String,
   hotelMoney:Number,
});

var hotel = mongoose.model("hotel",hotelSchema);
// var hotelnoe = new hotel({
//         "hotelId":14,
//         "hotelImg":"https://dimg06.c-ctrip.com/images/100f0600000015zg903FB_C_220_140.jpg",
//         "hotelName":"西街",
//         "hotelPlace":"桂林市阳朔县",
//         "hotelInfo":"爱上阳朔因为西街，阳朔最热闹的地方",
//         "hotelMoney":39,
//     })
//  hotelnoe.save();
// var hoteltwo = new hotel({
//     "hotelId":11,
//     "hotelImg":"https://dimg11.c-ctrip.com/images/200a0x000000kw9tg6B9A_R_225_168.jpg",
//     "hotelName":"161酒店",
//     "hotelPlace":"北京北海四合院店",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":648,
// })
// var hotelthree = new hotel({
//     "hotelId":03,
//     "hotelImg":"https://dimg04.c-ctrip.com/images//hotel/924000/923170/62802aabadd34068b465532575325784_R_200_200.jpg",
//     "hotelName":"彩虹云霄酒店",
//     "hotelPlace":"曼谷.水门市场",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":596,
// })
// var hotelfour = new hotel({
//     "hotelId":04,
//     "hotelImg":"https://dimg04.c-ctrip.com/images//200l0c00000065b0e967F_R_200_200.jpg",
//     "hotelName":"曼谷素坤逸大酒店",
//     "hotelPlace":"曼谷.素坤逸",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":452,
// })
// var hotelfive = new hotel({
//     "hotelId":05,
//     "hotelImg":"https://dimg04.c-ctrip.com/images//t1/hotel/1051000/1050320/b60a6d7152ca4dd7bbee4e09197cecc4_R_200_200.jpg",
//     "hotelName":"巴尔舒格凯宾斯基酒店",
//     "hotelPlace":"莫斯科",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":1226,
// })
// var hotelsix = new hotel({
//     "hotelId":06,
//     "hotelImg":"https://dimg04.c-ctrip.com/images//20020j000000ahne33D15_R_200_200.jpg",
//     "hotelName":"阿尔巴特美居酒店",
//     "hotelPlace":"莫斯科",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":615,
// })
// var hotelseve = new hotel({
//     "hotelId":07,
//     "hotelImg":"https://dimg12.c-ctrip.com/images/200h070000002iy1016B9_R_200_200.jpg",
//     "hotelName":"台南NIK家家民宿",
//     "hotelPlace":"中西区民族路三段36号",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":369,
// })
// var hoteleight = new hotel({
//     "hotelId":08,
//     "hotelImg":"https://dimg12.c-ctrip.com/images/200f0a00000056hgv035A_R_200_200.jpg",
//     "hotelName":"三道门建筑文创旅店",
//     "hotelPlace":"台南中西区成功路77号",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":606,
// })
// var hotelnigth = new hotel({
//     "hotelId":09,
//     "hotelImg":"https://dimg04.c-ctrip.com/images//fd/hotelintl/g4/M02/5F/BE/CggYHVaBZcuAa5_UAAFy8RE-ALw956_R_200_200.jpg",
//     "hotelName":"纽约中央公园怕克莱恩酒店",
//     "hotelPlace":"纽约.中城西区",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":1148,
// })
// var hotelten = new hotel({
//     "hotelId":10,
//     "hotelImg":"https://dimg04.c-ctrip.com/images//220e0f0000007hrqf99F4_R_200_200.jpg",
//     "hotelName":"纽约瑞吉酒店",
//     "hotelPlace":"纽约.纽约市中心",
//     "hotelInfo":"商务出行，地铁周边，交通方便，提供早餐商务出行，地铁周边，交通方便，提供早餐",
//     "hotelMoney":5506,
// })
    // hotelnoe.save();
    // hoteltwo.save();
    // hotelthree.save();
    //hotelfour.save();
    //hotelfive.save();
   // hotelsix.save();
   //hotelseve.save();
   //hoteleight.save();
   //hotelnigth.save();
  // hotelten.save();
    module.exports=hotel;
