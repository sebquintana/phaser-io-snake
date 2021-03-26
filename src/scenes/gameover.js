class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }

    preload() {
        console.log('soy gameover')
    }

    create() {
        this.scene.stop('UI');

        this.add.dynamicBitmapText(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2 - 30,
            'pixel',
            'GAME OVER',
            20)
            .setOrigin(0.5);

        this.evento = setTimeout(() => {
            this.salirEscena();
        }, 5000);

        this.input.keyboard.on('keydown-ENTER', () => {
            this.salirEscena();
        });

        this.input.on('pointerdown', () => {
            this.salirEscena();
        });
    }

    salirEscena(){
        clearTimeout(this.evento);
        this.scene.start('Menu');
    }
}

export default Gameover;