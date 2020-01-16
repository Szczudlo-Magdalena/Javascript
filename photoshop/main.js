document.addEventListener('DOMContentLoaded', Start)

let photoshop;
let photopaint;
function Start() {

    photoshop = new Photoshop();
    photopaint = new Paint();

    document.querySelector('#canvas').addEventListener('mousedown', () => photopaint.StartPosition());
    document.querySelector('#canvas').addEventListener('mouseup', () => photopaint.EndPosition());
    document.querySelector('#canvas').addEventListener('mousemove', () => photopaint.DrawSth());
    document.querySelector('#changeColorButton').addEventListener('click', () => photopaint.ChangeColorPainting());
    document.body.addEventListener('keypress', () => photopaint.ChooseSizeOfPen());

}


