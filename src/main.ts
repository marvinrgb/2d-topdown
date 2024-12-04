import './style.css'
import Phaser from 'phaser'
import * as types from './types'

const sizes: types.sizes = {
  height: 720,
  width: 1280
}

const gravity: number = 300;

class GameScene extends Phaser.Scene {
  constructor() {
    super('scene-game')
  }

  preload() {
    this.load.tilemapTiledJSON('tilemap', 'assets/tilemaptest.json');
    this.load.image('Doors', 'assets/sl/Tilesets/Doors.png')
    this.load.image('Hills', 'assets/sl/Tilesets/Hills.png')
    this.load.image('Grass', 'assets/sl/Tilesets/Grass.png')
    this.load.image('Water', 'assets/sl/Tilesets/Water.png')
    this.load.image('Wooden_House_Walls_Tileset', 'assets/sl/Tilesets/Wooden_House_Walls_Tileset.png')
  }

  create() {
    const map = this.make.tilemap({ key: 'tilemap'});

    const tileset = map.addTilesetImage()
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

