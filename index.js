window.addEventListener("load",()=>{
 const sbtn = document.querySelector("#start");
 const rbtn = document.querySelector("#reset");
 const stbtn = document.querySelector("#stop");
 let sw = document.querySelector(".s-w");
 let wait;
let h=m=s=ms=0+0;
 sbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    wait = setInterval(update,10);
    sbtn.disabled=true;
    stbtn.disabled=false;

 })
 function update(){
    sw.innerHTML = `${h} : ${m} : ${s} : ${ms}`
if((ms<=999)){
   if(s==59)
   ms=0;
   else{
    ms+=10
   } }
   else {
    ms=0
   }
if(s<=59){
    if(ms>=1000){
        s+=1;
    }
}
else{
    s=0;
}
if(m<=59){
    if(s==59){
        m+=1;
        s=0
    }
}
else{
   m=0; 
}
if(h<=24){
    if(m==59)
    h+=1;
}
sw.innerHTML = `${h} : ${m} : ${s} : ${ms}`
 }
 
 stbtn.addEventListener("click",function(e){
e.preventDefault();
   clearInterval(wait);
   stbtn.disabled=true;
   sbtn.disabled=false;
 })
})