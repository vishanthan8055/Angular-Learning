var hh = document.getElementById("hour");
var mm = document.getElementById("min");
var ss = document.getElementById("sec");
hc = 0
mc = 0
sc = 1
setInterval(function(){
    if(mc == 59){
        mc = 0;
        hc = hc + 1;
        mm.innerText = mc;
        hh.innerText = hc;
    }
    if(sc == 59){
        sc = 0;
        mc = mc + 1;
        if(sc<9){
            ss.innerText = "0"+sc;
            }
            else{
                ss.innerText = sc;

            }
        if(mc<9){
        mm.innerText = "0"+mc;
        }
        else{
        mm.innerText = mc;
        }
    }else{
        if(sc<9){
            ss.innerText = "0"+sc;
        }
        else{
            ss.innerText = sc;
        }
        sc = sc + 1;
    }
    
},1000)

