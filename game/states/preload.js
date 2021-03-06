
'use strict';
function Preload() {
  this.preloader = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.preloader = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
      this.preloader.anchor.setTo(0.5, 0.5);
      this.load.setPreloadSprite(this.preloader);

      this.load.image('background', 'assets/background.png');
      this.load.image('ground', 'assets/ground.png');
      this.load.image('title', 'assets/title.png');
      this.load.image('startButton', 'assets/start-button.png');

      this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
  },
  create: function() {
    this.preloader.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('play');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
