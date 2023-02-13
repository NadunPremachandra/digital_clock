const hourel = document.getElementById("hours");
const minutesel = document.getElementById("minutes");
const secondsel = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m =  new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;

    hourel.innerText = h;
    minutesel.innerText = m;
    secondsel.innerText = s;
    ampmel, (innerText = ampm);

    setTimeout(()=>{
        updateclock()
    }, 1000)
}

updateclock()