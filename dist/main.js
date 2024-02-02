let [secs, mins, hrs] = [0, 0, 0];
let displayId = document.getElementById('displayX');
let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');
let btnReset = document.getElementById('btnReset');
let timer = null;

function stopwatch(){
    secs++; 
    if (secs == 60){ 
        secs = 0;  
        mins++; 
        if (mins == 60) {
            mins = 0;  
            hrs++; 
        }
    }
    let secsMod = secs < 10 ? ('0' + secs) : secs;
    let minsMod = mins < 10 ? ('0' + mins) : mins;
    let hrsMods = hrs < 10 ? ('0' + hrs) : hrs;
    displayId.innerHTML = hrsMods + ':' + minsMod +':' + secsMod;
}

btnStart.addEventListener('click', function(){
    if (timer != null){
        clearInterval(timer);
    };   
    timer = setInterval(stopwatch, 1000);
    btnStart.innerHTML = "STARTED";
    btnStop.innerHTML = "PAUSE";
    btnStart.classList.add("focus:bg-slate-400");
 })

 btnStop.addEventListener('click', function(){
    clearInterval(timer);
    if(displayId.innerHTML != "00:00:00"){
        btnStart.innerHTML = "RESUME";
        btnStop.innerHTML = "PAUSED";
        btnStop.classList.add("focus:bg-slate-400");
    }
})

btnReset.addEventListener('click', function(){
    displayId.innerHTML = "00:00:00";
    clearInterval(timer);
    btnStart.innerHTML = "START";
    btnStop.innerHTML = "PAUSE";
    btnReset.classList.add("focus:bg-slate-400");
    [secs, mins, hrs] = [0, 0, 0];
})

