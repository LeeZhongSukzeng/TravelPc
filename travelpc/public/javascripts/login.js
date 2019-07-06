window.onload = function(){
    //注册
    var inputList = document.getElementsByClassName("myinput");
	for(var i = 0; i < inputList.length; i++) {
		inputList[i].onfocus = function() {
			var index = this.getAttribute("title");
			inputList[index].placeholder = " ";
		}
		
		inputList[i].onblur =  function() {
			var index = this.getAttribute("title");
			if(this.value.length < 4) {
				this.style.border = "1px solid red";
			}else{
                this.style.border = "1px solid #00889a";
            }
		}

    }
    
}