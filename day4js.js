

//q1
function display(eve,_this ){
    console.log(eve.keyCode);
    if(/^[a-zA-Z]$/.test(eve.key))
    _this.value+=eve.key;
    

}
    function mouse_display(eve)
    {
        console.log(eve.button);
    }
       
    
  




//q2
var inter;
function clock()
{
    alert("clock started");
    inter= setInterval(update_time,1000);

 
}
function update_time()
{
    document.getElementById("cl").innerText=new Date().toLocaleTimeString();
 
}

function stop_clock(eve)
{
    if(eve.key=='w' &&eve.altKey){
   clearInterval(inter);
   alert("clock stoped")
    }
}
 var arrofimg=["1.jpg","2.jpg","3.jpg","4.jpg"];
 var i=0;
function next()
{
    i++;
    if(i==arrofimg.length)
    i=0;
    
 document.getElementById("imges").src="./imgs/"+arrofimg[i];
 
}

function preves()
{
    i--;
    if(i<0)
    i=arrofimg.length-1;
    
 document.getElementById("imges").src="./imgs/"+arrofimg[i];
 
}

var innterval;
function play()
{
 innterval= setInterval(next,1000);
   
}
function stop()
{
    clearInterval( innterval)
   
}

function increas_opc(_this)
{
    _this.style.opacity=.3;
 _this.style.transition="all 3s";
 
}
function decreas_opc(_this)
{
    _this.style.opacity=1;
    _this.style.transition="all 3s";
}