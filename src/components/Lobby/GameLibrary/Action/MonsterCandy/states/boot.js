export default function bootState(){
    return{
        preload: function () {
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
        },
        create: function(){
            
            // start the physics engine
		    this.physics.startSystem(window.Phaser.Physics.ARCADE);            
            // set scale options
            this.input.maxPointers = 1;
            //makes the game center in the div
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            if (this.game.device.desktop) {

                //code for desktop devices
                this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            } else {
                //code for mobile devices

              this.game.scale.startFullScreen(false);
               this.game.scale.fullScreenScaleMode = window.Phaser.ScaleManager.SHOW_ALL;
               
            };
            // this.scale.setScreenSize(true);
            // start the Preloader state
            this.state.start('load');
        }
    }
}