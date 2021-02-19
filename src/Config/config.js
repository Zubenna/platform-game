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
  platformSpeedRange: [290, 290],

  mountainSpeed: 50,

  spawnRange: [80, 300],

  platformSizeRange: [80, 290],

  platformHeightRange: [-5, 5],

  platformHeighScale: 20,

  platformVerticalLimit: [0.4, 0.8],

  playerGravity: 800,

  jumpForce: 420,

  playerStartPosition: 200,

  jumps: 2,

  coinPercent: 25,

  firePercent: 25,
};

export { gameConfig, gameOptions };
