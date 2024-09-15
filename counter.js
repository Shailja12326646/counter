let x=document.querySelector("#text");
let total=document.querySelector("#total");
let rem= document.querySelector("#remaining");
let c=0;

x.addEventListener("keyup", ()=>{
   updateCounter();
   
});

function updateCounter(){
    
    total.innerHTML=x.value.length;
    let m=x.value.length;
    rem.innerHTML=`${300-m}`;
};