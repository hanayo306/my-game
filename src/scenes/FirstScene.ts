import logo from '../assets/typescript.svg';

const FirstScene = (): Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig => {
  let cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  let player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  return {
    key: 'First',

    preload() {
      this.load.svg('logo', logo);
    },

    create() {
      this.add.image(100, 100, 'logo');

      const particles = this.add.particles('logo');

      const emitter = particles.createEmitter({
        speed: 200,
        scale: { start: 2, end: 0 },
        blendMode: 'ADD',
        x: 0,
        y: 0,
      });

      const logo = this.physics.add.image(200, 200, 'logo');

      logo.setVelocity(400, 0);
      logo.setCollideWorldBounds(true, 1, 1);
      logo.setGravityY(0);

      emitter.startFollow(logo);

      const button = this.add.text(600, 400, '먼지 삭제');
      button.setInteractive();

      button.on('pointerdown', () => {
        particles.destroy();
        logo.destroy();
      });

      const target = this.add.circle(1100, 500, 50, 0xffffff);

      player = this.physics.add.sprite(500, 500, 'logo');

      player.setCollideWorldBounds(true);
    },
    update() {
      cursors = this.input.keyboard.createCursorKeys();
      if (cursors.left.isDown) {
        player.setVelocityX(-500);
      } else if (cursors.right.isDown) {
        player.setVelocityX(500);
      } else {
        player.setVelocityX(0);
      }

      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
      }

      if (player.x > 1050) {
        this.scene.start('Scene');
      }
    },
  };
};

export default FirstScene;
