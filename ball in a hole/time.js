class Time{
    constructor(){
        this.TimeOfGame();
    }

    TimeOfGame(){  
        let h1 = document.getElementsByTagName('h1')[0];
        let start = document.getElementById('start');
        let stop = document.getElementById('stop');
        let clear = document.getElementById('clear');
        let seconds = 0, minutes = 0, hours = 0;
        let time;


        function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        
        h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    
        timer();
        }
        function timer() {
        time = setTimeout(add, 1000);
        }
    
        start.onclick = timer;
    
        stop.onclick = function() {
        clearTimeout(time);
        }
    
        clear.onclick = function() {
        h1.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
        }
    }
}
