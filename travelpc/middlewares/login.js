//判断登录权限
//req.cookies
module.exports = function(req,res,next){
    if(req.session.username&&req.session.password){
        next();
    }else{
        res.redirect('/login');
    }
}