var im = document.getElementsByTagName("img")
var imgs  = ["img1.jpg","img2.jpg","img3.jpg"]
count = 0;
setInterval(function(){
    count = (count + 1) % 3;
    im[0].src = imgs[count]
},2000)