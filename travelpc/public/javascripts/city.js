
    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {console.log(121);
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           
            document.getElementById("bgimga").style.display = "block";
        } else {
          
            document.getElementById("bgimga").style.display = "none";
        }
    }

    var start = document.getElementsByClassName("start");
    for(var i=0;i<start.length;i++){
        start[i].onclick = function(){
                this.src="../img/sch.png";
        }
        start[i].ondblclick = function(){
               this.src="../img/scq.png";
        }
    }

    