class Winner{
    constructor(){
        this.GameIsWin();
    }
    
GameIsWin(){
      console.log('wygrales');
      let gameIsWinDiv = document.createElement('div');
      document.body.appendChild(gameIsWinDiv);
      gameIsWinDiv.id="gameIsWinDiv";
      gameIsWinDiv.textContent ='A WINNER IS YOU';
    }
}