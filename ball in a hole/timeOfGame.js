class TimeOfGame{
    countTimeDiv;
    // seconds;
    // minutes;
    // hours;
    constructor(){
        this.countTimeDiv = document.createElement('div');
        document.body.appendChild(this.countTimeDiv); 
        this.countTimeDiv.id='countTimeDiv';
        this.countTimeDiv.textContent='Czas gry'
        
    }
    add() {
        let seconds=0;
        let minutes = 0;
        let hours = 0;
        
        
        
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            this.countTimeDiv.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        }
        
    }
   
    
}
   

        
        
        
   
    


    
