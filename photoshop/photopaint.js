class Paint {
    constructor() {
        this.painting = false;
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');

        document.querySelector('#circleBrush').addEventListener('click', () => {
            this.circle = true;
            this.ChangeSquare();
        })
        document.querySelector('#squareBrush').addEventListener('click', () => {
            this.square = true;
            this.ChangeSquare();
        })
        document.querySelector('#squareN').addEventListener('click', () => {
            this.squaren = true;
            this.ChangeSquare();
        })
    }
    StartPosition() {
        this.painting = true;
        this.DrawSth();
    }
    EndPosition() {
        this.painting = false;
        this.ctx.beginPath();
    }
    DrawSth() {
        let x = event.pageX;
        let y = event.pageY;
        if (!this.painting) return;
        //this.ctx.lineWidth = 20;

        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.beginPath(x, y);
        this.ctx.moveTo(x, y);
    }
    ChangeColorPainting() {
        const colors = ['pink', 'yellow', 'orange', 'red', 'green', 'aliceblue', 'aquamarine', 'chartreuse', 'chocolate', 'darkmagenta', 'deeppink', 'blue', 'mediumseagreen', 'mediumblue', 'mistyrose', 'slategray', 'yellowgreen', 'powderblue', 'palegreen', 'indigo', 'dodgerblue'];
        const index = Math.floor(Math.random() * colors.length);
        this.ctx.strokeStyle = colors[index];

    }
    ChangeSquare() {
        if (this.circle == true) {
            this.ctx.lineCap = 'round';
            this.circle = false;
        }
        else if (this.square == true) {
            this.ctx.lineCap = 'square';
            this.square = false;
        }
        else if (this.squaren == true) {
            this.ctx.lineCap = 'butt';
            this.squaren = false;
        }
    }
    ChooseSizeOfPen() {
        let codekey = event.code;
        if (codekey === 'Equal') {
            this.ctx.lineWidth++;
        }
        else if (codekey === 'Minus') {
            this.ctx.lineWidth--;
        }
    }
}
