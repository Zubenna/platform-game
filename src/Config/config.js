import Phaser from 'phaser';

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 900,
  height: 680,
  backgroundColor: 0x0c88c7,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
  },
  user: '',
};


export { gameConfig };
