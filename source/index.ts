import { Game, Scene } from 'phaser'

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: { preload, create, update }
}

let game: Game = new Game(config)

function preload(this: Scene): void {

}

function create(this: Scene): void {

}

function update(this: Scene): void {

}