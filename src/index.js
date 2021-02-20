import Phaser from 'phaser';
import { gameConfig } from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import Model from './Model';
import CreditsScene from './Scenes/CreditsScene';
import LoginScene from './Scenes/LoginScene';
import leaderBoardScene from './Scenes/LeaderBoardScene';
import GameOverScene from './Scenes/GameOverScene';


class Game extends Phaser.Game {
  constructor() {
    super(gameConfig);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Login', LoginScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('LeaderBoard', leaderBoardScene);
    this.scene.add('Options', OptionsScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
