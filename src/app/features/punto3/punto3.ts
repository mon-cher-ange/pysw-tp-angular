import { Component } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-punto3',
  imports: [],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {
  board: Card[] = [];
  tries: number = 0;
  matches: number = 0;
  gameStarted: boolean = false;
  gameEnded: boolean = false;
  gameWon: boolean = false;
  winningCondition: number = 0;
  firstCardFlip: Card | null = null;
  secondCardFlip: Card | null = null;
  isChecking: boolean = false;

  ngOnInit() {
    this.board = this.initBoard();
    this.winningCondition = this.board.length / 2;
  }

  private initBoard(): Card[] {
    return this.shuffleBoard([
      {
        id: 1,
        value: 'bi bi-1-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 2,
        value: 'bi bi-1-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 3,
        value: 'bi bi-2-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 4,
        value: 'bi bi-2-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 5,
        value: 'bi bi-3-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 6,
        value: 'bi bi-3-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 7,
        value: 'bi bi-4-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 8,
        value: 'bi bi-4-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 9,
        value: 'bi bi-5-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 10,
        value: 'bi bi-5-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 11,
        value: 'bi bi-6-square-fill',
        flipped: false,
        matched: false,
      },
      {
        id: 12,
        value: 'bi bi-6-square-fill',
        flipped: false,
        matched: false,
      },
    ]);
  }

  private shuffleBoard(array: Card[]): Card[] {
    let currentIndex: number = array.length;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  playGame(): void {
    this.resetGame();
    this.gameStarted = true;
  }

  flipCard(card: Card): void {
    if (this.isChecking || card.flipped || card.matched || !this.gameStarted) {
      return;
    }
    card.flipped = true;
    // First card flip assignment
    if (!this.firstCardFlip) {
      this.firstCardFlip = card;
      return;
    }
    // Second card flip assignment
    this.secondCardFlip = card;
    // Decrease tries after flipping both cards
    this.tries--;
    // Init check on both card flips
    this.isChecking = true;

    if (this.firstCardFlip.value === this.secondCardFlip.value) {
      this.firstCardFlip.matched = true;
      this.secondCardFlip.matched = true;
      this.matches++;
      this.resetTurn();
      this.isGameOver();
    } else {
      if (this.tries <= 0) {
          this.isGameOver();
          this.resetTurn();
      } else {
        setTimeout(() => {
          if (this.firstCardFlip) this.firstCardFlip.flipped = false;
          if (this.secondCardFlip) this.secondCardFlip.flipped = false;
          this.resetTurn();
        }, 800);
      }
    }
  }

  resetGame(): void {
    this.gameStarted = false;
    this.gameEnded = false;
    this.gameWon = false;
    this.matches = 0;
    this.tries = 10;
    this.resetTurn();
    this.board = this.initBoard();
  }

  private resetTurn(): void {
    this.firstCardFlip = null;
    this.secondCardFlip = null;
    this.isChecking = false;
  }

  private isGameOver() {
    if (this.matches === this.winningCondition) {
      this.gameStarted = false;
      this.gameEnded = true;
      this.gameWon = true;
    } else if (this.tries <= 0) {
      this.gameStarted = false;
      this.gameEnded = true;
      this.gameWon = false;
    }
  }
}
