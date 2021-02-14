import Phaser from 'phaser';
import { gameConfig } from './Config/config';


class Game extends Phaser.Game {
  constructor () {
    super(gameConfig);
    const model = new Model();
  }
}

window.game = new Game();

