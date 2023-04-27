let timeMonitor = document.getElementById('timeMonitor');
timeMonitor.innerHTML += <p>${Date.now()}</p>
timeMonitor.innerHTML += <p>${Date()}</p>

let count = 1;

function launchOnce(){
    setTimeout(()=>{
        timer(count);
    }, 1000);
    function timer(time){
        timeMonitor.innerHTML = <p>${time}</p>;
        count++;
    }
}
function launchForEver(){
    setInterval(()=>{
        timer(count);
    }, 1000);
    function timer(time){
        timeMonitor.innerHTML = <p>${time}</p>;
        count++;
    }
}
launchForEver();