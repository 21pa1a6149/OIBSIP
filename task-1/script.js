function br1(){
    document.getElementById("display").textContent+='(';
}
function br2(){
    document.getElementById("display").textContent+=')';
}
function a0(){
    document.getElementById("display").textContent+=0;
}
function a1(){
    document.getElementById("display").textContent+=1;
}
function a2(){
    document.getElementById("display").textContent+=2;
}
function a3(){
    document.getElementById("display").textContent+=3;
}
function a4(){
    document.getElementById("display").textContent+=4;
}
function a5(){
    document.getElementById("display").textContent+=5;
}
function a6(){
    document.getElementById("display").textContent+=6;
}
function a7(){
    document.getElementById("display").textContent+=7;
}
function a8(){
    document.getElementById("display").textContent+=8;
}
function a9(){
    document.getElementById("display").textContent+=9;
}
function amod(){
    document.getElementById("display").textContent+='%';
}
function aadd(){
    document.getElementById("display").textContent+='+';
}
function asub(){
    document.getElementById("display").textContent+='-';
}
function amul(){
    document.getElementById("display").textContent+='*';
}
function sqr(){
    document.getElementById("display").textContent+='**';
}
function adiv(){
    document.getElementById("display").textContent+='/';
}
function adot(){
    document.getElementById("display").textContent+='.';
}
function apm(){
    document.getElementById("display").textContent+="00"
}

// clear
document.getElementById("display").addEventListener("click", clr);
function clr(){
    document.getElementById("display").textContent="";
}
 // delete
 document.getElementById("display").addEventListener("click", del);
 function del(){
    document.getElementById("display").textContent=document.getElementById("display").textContent.slice(0,-1);
 }
v
 //calculate
 document.getElementById("display").addEventListener("click", result);
 function result(){
    var answer=eval(document.getElementById("display").textContent);
    document.getElementById("display").textContent=answer;

 }
