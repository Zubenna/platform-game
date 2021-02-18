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

    this.addMountains();

    this.addedPlatforms = 0;

    this.playerJumps = 0;

    this.addPlatform(gameConfig.width,
      gameConfig.width / 2,
      gameConfig.height * gameOptions.platformVerticalLimit[1]);

    this.player = this.physics.add.sprite(gameOptions.playerStartPosition, gameConfig.height * 0.7, 'player_run');
    this.player.setGravityY(gameOptions.playerGravity);
    this.player.setDepth(2);

    this.dying = false;

    this.platformCollider = this.physics.add.collider(this.player,
      this.platformGroup,
      function func1() {
        if (!this.player.anims.isPlaying) {
          this.player.anims.play('run');
        }
      }, null, this);

      this.physics.add.overlap(this.player, this.coinGroup, function func2(player, coin) {
        this.pickupMusic = this.sound.add('pickup', { volume: 0.5, loop: false });
        this.pickupMusic.play();
        this.tweens.add({
          targets: coin,
          y: coin.y - 100,
          alpha: 0,
          duration: 800,
          ease: 'Cubic.easeOut',
          callbackScope: this,
          onComplete() {
            this.score += 1;
            this.scoreText.setText(`Score: ${this.score}`);
            this.coinGroup.killAndHide(coin);
            this.coinGroup.remove(coin);
          },
        });
      }, null, this);
// Commit one


    }
}
