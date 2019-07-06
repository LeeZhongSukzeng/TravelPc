/*tab切换*/
var metitle = document.getElementById("metitle");
var liList = metitle.getElementsByTagName("li");
var metabList = document.getElementsByClassName("me-tab");
for(var i=0; i<liList.length; i++){
    liList[i].onmouseover = function(){
        for(var j=0; j<liList.length; j++){
            liList[j].className = " ";
        }
            this.className = "menow";
            for(var m=0; m<metabList.length; m++){
                if(m == this.getAttribute("title")){
                    metabList[m].style.display = "block";
                }
                else{
                    metabList[m].style.display = "none";
                }
            }
    
    }
}

//提交按钮
//首先先禁用掉提交事件，让他3秒后提交，模仿请求服务器的过程，通过一个监听变量flag，
//第一次提交将他设置为true，判断 如果是true就退出不提交，以这种方式达到提交一次的目的
var form=document.getElementById('form');
flag=false;  //监听变量用于提交一次表单
form.onsubmit=function(e){
    e.preventDefault();
    if (flag) {return;};
    flag=true;
    setTimeout(function(){
        alert('确定提交？');
        form.submit();
    },1000)
     
}

