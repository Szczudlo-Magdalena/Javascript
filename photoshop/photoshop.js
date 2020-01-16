class Photoshop {
    constructor() {
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');
        const img = new Image();
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, 0, 0, 1388, 880)
        });
        img.src = 'wierzbaRozowa.jpg';
        this.painting = false;

        document.querySelector('#brighter').addEventListener('click', () => {
            this.bright = true;
            this.ChangeColor();
        })
        document.querySelector('#darken').addEventListener('click', () => {
            this.darken = true;
            this.ChangeColor();
        })
        document.querySelector('#greyImage').addEventListener('click', () => {
            this.greyFiler = true;
            this.ChangeColor();
        })
    }
    ChangeColor(amount = 30) {
        const canvasData = this.ctx.getImageData(0, 0, 1330, 880)
        if (this.bright == true) {
            for (let i = 0; i < canvasData.data.length; i += 4) {
                //R
                canvasData.data[i] += amount
                //G
                canvasData.data[i + 1] += amount
                // B
                canvasData.data[i + 2] += amount
            }
            this.ctx.putImageData(canvasData, 0, 0)
            this.bright = false;
        }
        else if (this.darken == true) {
            for (let i = 0; i < canvasData.data.length; i += 4) {
                canvasData.data[i] -= amount
                canvasData.data[i + 1] -= amount
                canvasData.data[i + 2] -= amount
            }
            this.ctx.putImageData(canvasData, 0, 0)
            this.darken = false;
        }
        else if (this.greyFiler == true) {
            for (let i = 0; i < canvasData.data.length; i += 4) {
                const r = canvasData.data[i];
                const g = canvasData.data[i + 1];
                const b = canvasData.data[i + 2];
                const average = (r + b + g) / 3;
                canvasData.data[i] = canvasData.data[i + 1] = canvasData.data[i + 2] = average;
            }
            this.ctx.putImageData(canvasData, 0, 0)
            this.greyFiler = false;
        }
    }

}



