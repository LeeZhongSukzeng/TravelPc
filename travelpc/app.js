var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const moment = require('moment');

var app = express();
app.locals.moment = moment;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());//post req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}));
app.use(cookieParser("123trvel456"));
app.use(session({
  secret:"123trvel456",
  name:"sessionId",
  cookie:{maxAge:60*1000},
  rolling:true,
  store:new MongoStore({
    url:"mongodb://localhost:27017/travelpc"  //session保存到指定的数据库
  })
  
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

//按功能分模块
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var discussRouter = require('./routes/discuss');
var handlerdcRouter = require('./routes/handlediscuss');
var myRouter = require('./routes/my');
var myinfoRouter = require('./routes/myinfo');
var cityRouter = require('./routes/city');
var cityxqRouter = require('./routes/cityxq');
var hotelRouter = require('./routes/hotel');
var hotelfindRouter = require('./routes/hotelfind');
app.use('/register', registerRouter);
app.use('/login',loginRouter);
app.use('/home',homeRouter);
app.use('/city',cityRouter);
app.use('/writdiscuss',discussRouter);
app.use('/handlediscuss',handlerdcRouter);
app.use('/my',myRouter);
app.use('/myinfo',myinfoRouter);
app.use('/city',cityRouter);
app.use('/cityxq',cityxqRouter);
app.use('/hotel',hotelRouter);
app.use('/hotelfind',hotelfindRouter);

//链接数据库
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/travelpc",{
  useNewUrlParser:true,
  useFindAndModify:false
});
const con = mongoose.connection;
con.on('open',function(){
  console.log("数据库链接成功");
})

//退出程序
app.get('/loginout',function(req,res){
  req.session.destroy(function(err){
    if(err)throw err;
    console.log("退出成功");
  })
  res.redirect('/login');
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(8081);