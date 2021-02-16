import Phaser from 'phaser';
import { gameOptions, gameConfig } from '../Config/config';


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.gameOver = false;
    this.score = 0;
    this.scoreText = null;
  }

  create() {
    this.mountainGroup = this.add.group();

    this.platformGroup = this.add.group({
      removeCallback(platform) {
        platform.scene.platformPool.add(platform);
      },
    });

    this.platformPool = this.add.group({
      removeCallback(platform) {
        platform.scene.platformGroup.add(platform);
      },
    });

    this.coinGroup = this.add.group({
      removeCallback(coin) {
        coin.scene.coinPool.add(coin);
      },
    });

    this.coinPool = this.add.group({
      removeCallback(coin) {
        coin.scene.coinGroup.add(coin);
      },
    });

    this.fireGroup = this.add.group({

      removeCallback(fire) {
        fire.scene.firePool.add(fire);
      },
    });

    this.firePool = this.add.group({
      removeCallback(fire) {
        fire.scene.fireGroup.add(fire);
      },
    });

  } 
  update() {
    
  }
}
