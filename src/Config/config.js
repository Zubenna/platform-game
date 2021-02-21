import Phaser from 'phaser';

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1270,
  height: 650,
  backgroundColor: 0x0c87,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
  },
  user: '',
};

const gameOptions = {
  platformSpeedRange: [300, 300],

  spawnRange: [80, 300],

  platformSizeRange: [100, 300],

  platformHeightRange: [-3, 3],

  platformHeighScale: 20,

  platformVerticalLimit: [0.4, 0.8],

  playerGravity: 900,

  jumpForce: 420,

  playerStartPosition: 200,

  jumps: 2,

  coinPercent: 25,

  firePercent: 25,
};

export { gameConfig, gameOptions };
