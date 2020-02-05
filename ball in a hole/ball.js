class Ball {
    ball;
    hole1;
    hole2;
    hole3;
    HoleObj;
    x;
    y;

    constructor () {
        this.ball = document.getElementById("ball");
        this.hole1 = document.getElementById("hole1");
        this.hole2 = document.getElementById("hole2");
        this.hole3 = document.getElementById("hole3"); 
        
        this.BallMovement();
    }
    BallMovement(){
        this.ball.style.top = 90 + "px";

        window.addEventListener("deviceorientation", function(event) {

            this.HoleObj = {

                hole1: {top: getOffset(this.hole1).top, left: getOffset(this.hole1).left, visited:0},
                hole2: {top: getOffset(this.hole2).top, left: getOffset(this.hole2).left, visited:0},
                hole3: {top: getOffset(this.hole3).top, left: getOffset(this.hole3).left, visited:0},
                
            }

            this.y = event.beta;
            this.x = event.alpha;

            let _x, _y = 0;

            this.ball.style.top = this.y + "px";
            this.ball.style.left = this.x + "px";

 
            if (event) {

                let __x = GetPropertyValue(this.HoleObj, "hole2.left");
                let __y = GetPropertyValue(this.HoleObj, "hole2.top");

                

            if (((this.ball.offsetLeft <= this.hole2.offsetLeft + 10) && this.ball.offsetLeft >= this.hole2.offsetLeft - 10) && ((this.ball.offsetTop <= __y + 4) && (this.ball.offsetTop >= __y - 4))) {
                this.console.log("Ole2");
                this.HoleObj.hole2.visited='false';
                this.console.log(HoleObj)

               } else if (((this.ball.offsetLeft <= this.hole1.offsetLeft + 10) && this.ball.offsetLeft >= this.hole1.offsetLeft - 10) && ((this.ball.offsetTop <= this.hole1.offsetTop + 4) && (this.ball.offsetTop >= this.hole1.offsetTop - 4))) {
                this.console.log("Ole1");
                this.HoleObj.hole1.visited='ala';
                this.console.log(HoleObj)
                
               }
               else if(((this.ball.offsetLeft <= this.hole3.offsetLeft + 10) && this.ball.offsetLeft >= this.hole3.offsetLeft - 10) && ((this.ball.offsetTop <= this.hole1.offsetTop + 4) && (this.ball.offsetTop >= this.hole3.offsetTop - 4))){
              this.console.log('ole3')
              this.HoleObj.hole3.visited++;
              this.console.log(HoleObj)
              }
            }
            if(this.HoleObj.hole3.visited == 1){
                let win = new Winner();
            }
            });
            function GetPropertyValue(obj1, dataToRetrieve) {
                return dataToRetrieve
                  .split('.') 
                  .reduce(function(o, k) {
                    return o && o[k]; 
                  }, obj1) 
            }

            function getOffset(el) {
                const rect = el.getBoundingClientRect();
                return {
                  left: rect.left + window.scrollX,
                  top: rect.top + window.scrollY
            };
        }   
    }
}

   

