import Phaser from 'phaser';
import './style.css';

class SimpleGame {
  constructor() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: '100%',
      height: '100%',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
    });
  }

  game: Phaser.Game;
}

window.onload = () => {
  const game = new SimpleGame();
};
