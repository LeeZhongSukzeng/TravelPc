//二级菜单
var myli = document.getElementById("myli");
var myul = document.getElementById("myul");
myli.onmouseover = function(){
    myul.style.display="block";
}
myli.onmouseout = function(){
    myul.style.display="none";
}