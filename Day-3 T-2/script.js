var timer = document.getElementById("timer");
var wish = document.getElementById("wish");

var img = document.getElementsByTagName("img");
count = 30;

setInterval(function(){
    if(count == 0){
        timer.innerText="";
        wish.innerText="Happy Morning Vinoth Sir!";
        img[0].style.display = "flex"
        return;
    }
    timer.innerText = count;
    count=count-1;
},1000)
