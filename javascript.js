const clock=document.querySelector("#clock");
function updateClock(){
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();

};
updateClock();
setInterval(updateClock,1000);


