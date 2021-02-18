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
      this.physics.add.overlap(this.player, this.fireGroup, function func3() {
        this.dieMusic = this.sound.add('dead', { volume: 0.5, loop: false });
        this.dieMusic.play();
        this.dying = true;
        this.player.anims.play('dead', false);
        this.player.body.setVelocityY(-200);
        this.physics.world.removeCollider(this.platformCollider);
      }, null, this);

      this.input.on('pointerdown', this.jump, this);

      this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
  }

  addMountains() {
  const rightmostMountain = this.getRightmostMountain();
  if (rightmostMountain < gameConfig.width * 2) {
    const mountain = this.physics.add.sprite(rightmostMountain + Phaser.Math.Between(100, 350), gameConfig.height + Phaser.Math.Between(0, 100), 'mountain');
    mountain.setOrigin(0.5, 1);
    mountain.body.setVelocityX(gameOptions.mountainSpeed * -1);
    this.mountainGroup.add(mountain);
      if (Phaser.Math.Between(0, 1)) {
        mountain.setDepth(1);
      }
    mountain.setFrame(Phaser.Math.Between(0, 3));
    this.addMountains();
    }
  }

  getRightmostMountain() {
  let rightmostMountain = -200;
  this.mountainGroup.getChildren().forEach((mountain) => {
  rightmostMountain = Math.max(rightmostMountain, mountain.x);
  });
    return rightmostMountain;
  }

  addPlatform(platformWidth, posX, posY) {
    this.addedPlatforms += 1;
    let platform;
    if (this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.y = posY;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
      platform.displayWidth = platformWidth;
      platform.tileScaleX = 1 / platform.scaleX;
    } else {
      platform = this.add.tileSprite(posX, posY, platformWidth, 32, 'platform');
      this.physics.add.existing(platform);
      platform.body.setImmovable(true);
      platform.body.setVelocityX(Phaser.Math.Between(
        gameOptions.platformSpeedRange[0],
        gameOptions.platformSpeedRange[1],
      ) * -1);
      platform.setDepth(2);
      this.platformGroup.add(platform);
    }
    this.nextPlatformDistance = Phaser.Math.Between(
      gameOptions.spawnRange[0],
      gameOptions.spawnRange[1],
    );

    if (this.addedPlatforms > 1) {
      if (Phaser.Math.Between(1, 100) <= gameOptions.coinPercent) {
        if (this.coinPool.getLength()) {
          const coin = this.coinPool.getFirst();
          coin.x = posX;
          coin.y = posY - 96;
          coin.alpha = 1;
          coin.active = true;
          coin.visible = true;
          this.coinPool.remove(coin);
        } else {
          const coin = this.physics.add.sprite(posX, posY - 96, 'coin');
          coin.setImmovable(true);
          coin.setVelocityX(platform.body.velocity.x);
          coin.anims.play('rotate');
          coin.setDepth(2);
          this.coinGroup.add(coin);
        }
      }

      if (Phaser.Math.Between(1, 100) <= gameOptions.firePercent) {
        if (this.firePool.getLength()) {
          const fire = this.firePool.getFirst();
          fire.x = posX - platformWidth / 2 + Phaser.Math.Between(1, platformWidth);
          fire.y = posY - 46;
          fire.alpha = 1;
          fire.active = true;
          fire.visible = true;
          this.firePool.remove(fire);
        } else {
          const fire = this.physics.add.sprite(posX - platformWidth / 2 + Phaser.Math.Between(1, platformWidth), posY - 46, 'fire');
          fire.setImmovable(true);
          fire.setVelocityX(platform.body.velocity.x);
          fire.setSize(8, 2, true);
          fire.anims.play('burn');
          fire.setDepth(2);
          this.fireGroup.add(fire);
        }
      }
    }
  }
  
  jump() {
    if ((!this.dying) && (this.player.body.touching.down
      || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps))) {
      if (this.player.body.touching.down) {
        this.playerJumps = 0;
      }
      this.player.setVelocityY(gameOptions.jumpForce * -1);
      this.playerJumps += 1;

      this.player.anims.play('jump', false);
    }
  }

}
