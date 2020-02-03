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

        this.ball.style.top = 90 + "px";

        window.addEventListener("deviceorientation", function(event) {
            // console.log('event: ', event);

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
        }
        )}
}