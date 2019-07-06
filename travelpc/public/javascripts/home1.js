window.onload=function(){
    
    
    //我的导航
    var nav = document.getElementById("nav");
    var meul = document.getElementById("meul");
    var me = document.getElementById("me");
    me.onclick = function(){
        if(meul.style.display == "block"){
            meul.style.display == "none";
        }else{
            meul.style.display="block";
        }
    }
    me.ondblclick = function(){
        meul.style.display="none";
    }

//热门城市选择
var hotmorez = document.getElementsByClassName("hotmorez")[0];
var hotmorey = document.getElementsByClassName("hotmorey")[0];
var movel = document.getElementsByClassName("movel")[0];
var mover = document.getElementsByClassName("mover")[0];
var hotul = document.getElementById("hotul");
var liList = hotul.getElementsByTagName("li");
var hotull = document.getElementById("hotull");
var liListl = hotul.getElementsByTagName("li");
hotmorey.onclick = function(){
    hotul.style.animation="moveleft 1s";
    hotul.style.animationFillMode="forwards";
    hotmorez.style.display="block";
    hotmorey.style.display="none";
}
hotmorez.onclick = function(){
    hotul.style.animation="moverigth 1s";
    hotul.style.animationFillMode="forwards";
    hotmorey.style.display="block";
    hotmorez.style.display="none";
} 

mover.onclick = function(){
    hotull.style.animation="moveleft 1s";
    hotull.style.animationFillMode="forwards";
    movel.style.display="block";
    mover.style.display="none";
}
movel.onclick = function(){
    hotull.style.animation="moverigth 1s";
    hotull.style.animationFillMode="forwards";
    mover.style.display="block";
    movel.style.display="none";
} 
for(var j=0; j<liListl.length; j++){
    liListl[j].onmouseover=function(){
        this.className="now";
    }
    liListl[j].onmouseout=function(){
        this.className=" ";
    }
}


/*回到顶部*/
	
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("gotoTop").style.display = "block";
    } else {
        document.getElementById("gotoTop").style.display = "none";
    }
}
function scrollshow(){
if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    gotoTop.style.display = "block";
}else{
    gotoTop.style.display = "none";
}
}
gotoTop.onclick = function(){
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;
 
}
//广告
var cover = document.getElementById('cover');
var delet = document.getElementById('delet');
setTimeout(function(){
    cover.style.display = 'block';
},4000);
delet.onclick = function(){
    cover.style.display = 'none';
    clearTimeout();
}

}