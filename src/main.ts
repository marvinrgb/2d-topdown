import './style.css'
import Phaser from 'phaser'
import * as types from './types'

const sizes: types.sizes = {
  height: 500,
  width: 500
}

const gravity: number = 300;

class GameScene extends Phaser.Scene {
  constructor() {
    super('scene-game')
  }

  preload() {

  }

  create() {

  }

  update() {
    
  }
}



const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  height: sizes.height,
  width: sizes.width,
  canvas: gameCanvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: gravity, x: 0},
      debug: true
    }
  },
  scene: [GameScene]
}

const game = new Phaser.Game(config);

