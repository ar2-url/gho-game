const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  backgroundColor: '#66cccc',
  scene: [StartScene, GameScene, EndScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: 0,
      enableBody: true,
    }
  },
};

const game = new Phaser.Game(config);
