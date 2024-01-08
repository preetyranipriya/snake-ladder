import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{
  squares: number[] = Array(100).fill(0); // Represents the board with 100 squares
  players: number[] = [1, 1]; // Initial positions of two players
  currentPlayer: number = 0; // 0 or 1
  rolledNumber: number | null = null;
  winnerImage: string | null = null;
  

  snakesAndLadders: { [key: number]: number } = {
    32: 6,
     74: 22,
     
    
     86: 51,
     99: 39,
    9 : 31,
    16: 45,
    18: 64,
    48: 66,
    50: 93 ,
    63:81,
  };
endSnakes:number[]=[6,22,51,39];
endStair:number[]=[31,45,64,66,93,81];
  

  rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  movePlayer(playerIndex: number, steps: number): void {
    this.players[playerIndex] += steps;
    // Check for snakes and ladders
    if (this.snakesAndLadders[this.players[playerIndex]]) {
      this.players[playerIndex] = this.snakesAndLadders[this.players[playerIndex]];
    }
  }

  switchPlayer(): void {
    this.currentPlayer = 1 - this.currentPlayer;
  }

  ngOnInit(): void {
    let j:number=100;
    for(let i = 0; i <100; i++){
      this.squares[i] = j;
      j--;
    }
    for(let i = 10; i < 100 ; i+= 20){
      for(let j = 0, k = 9; j < k; j++, k--){
        let temp = this.squares[i+j];
        this.squares[i+j] = this.squares[i+k];
        this.squares[i+k] = temp;
      }
    }
  }
  constructor(){
    
  }
  rollAndMove(): void {
    this.rolledNumber = this.rollDice(); // Store the rolled number
    const steps = this.rolledNumber;
    this.movePlayer(this.currentPlayer, steps);

    // if (this.players[this.currentPlayer] >= this.squares.length - 1) {
    //   if (this.players[this.currentPlayer] === this.squares.length - 1) {
    //     this.winnerImage = this.currentPlayer === 0 ? 'assets/red.jpg' : 'assets/blue.jpg';
        
    //       this.resetGame();
    //     // Display winner image for 1 second before showing the alert
    //   } else {
    //     console.log(`Player ${this.currentPlayer + 1} reached ${this.players[this.currentPlayer] + 1}. Keep going!`);
    //     this.switchPlayer();
    //   }
    // } else {
    //   this.switchPlayer();
    // }
    if (this.players[this.currentPlayer] >= this.squares.length - 1) {
          this.winnerImage = this.currentPlayer === 0 ? 'assets/red.jpg' : 'assets/blue.jpg';
          
          setTimeout(() => {
            this.resetGame();
          }, 5000);
          // Display winner image for 1 second before showing the alert
        }
        else{ 
          this.switchPlayer();
        }
  }

  resetGame(): void {
    this.winnerImage = null;
    this.players = [1, 1];
    this.currentPlayer = 0;
    this.rolledNumber = null;
  }

}