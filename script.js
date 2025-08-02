let enddate = "17  August  2025  12:01  PM" ;

document.getElementById("date").innerText=enddate;
let inputs=document.querySelectorAll("input")

const clock=()=>{
    let end= new Date(enddate);
    let now =new Date();
    let diff=(end-now)/1000;
    let days=Math.floor(diff/3600/24);
    let hour=(Math.floor(diff/3600)%24);
    let mint=(Math.floor(diff/60)%60)
    let sec=(Math.floor(diff%60))
    console.log(sec);
     
    if(diff<0) return;
    //inputs value putting
    inputs[0].value=days;
    inputs[1].value=hour;
    inputs[2].value=mint;
    inputs[3].value=sec;
    

}
clock()
//hour=(Math.floor(diff/3600))-(days*24);
// 1 day =24 hour
// 1 hour=60 mint
// 60 mint= 3600 sec

setInterval(()=>{
    clock()
},
1000
)