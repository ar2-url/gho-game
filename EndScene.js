class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' })
  }

  preload() {
    this.load.image('end', 'img2/Game+over.png');
  }

  create() {
    screen = this.add.image(0, 0, 'end').setOrigin(0);

    // Reset global variables
    score = 0;
    speed = 1;
    // Reset sprite positions
    gameState.numCoordinates = {};

    this.input.keyboard.on('keydown', () => {
      this.scene.stop('EndScene');
      this.scene.start('GameScene');
    });
  }
}



