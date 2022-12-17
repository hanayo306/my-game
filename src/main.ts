import Phaser from 'phaser';
import firstScene from './scenes/FirstScene';
import SecondScene from './scenes/SecondScene';

import './style.css';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1200,
  height: 675,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [firstScene(), SecondScene()] as Phaser.Types.Scenes.SettingsConfig[],
  scale: {
    mode: Phaser.Scale.FIT,
  },
};

class SimpleGame {
  constructor() {
    this.game = new Phaser.Game(config);
  }

  game: Phaser.Game;
}

window.onload = () => {
  const game = new SimpleGame();
};
