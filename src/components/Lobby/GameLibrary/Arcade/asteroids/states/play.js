export default function playState(game) {
    var sprite;
    var weapon;
    var cursors;
    var fireButton;
    return {
        create: function () {
            //  Creates 30 bullets, using the 'bullet' graphic
            weapon = game.add.weapon(30, 'bullet');

            //  The bullet will be automatically killed when it leaves the world bounds
            weapon.bulletKillType = window.Phaser.Weapon.KILL_WORLD_BOUNDS;

            //  The speed at which the bullet is fired
            weapon.bulletSpeed = 600;

            //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
            weapon.fireRate = 100;

            sprite = this.add.sprite(400, 300, 'ship');

            sprite.anchor.set(0.5);

            game.physics.arcade.enable(sprite);

            sprite.body.drag.set(70);
            sprite.body.maxVelocity.set(200);

            //  Tell the Weapon to track the 'player' Sprite
            //  With no offsets from the position
            //  But the 'true' argument tells the weapon to track sprite rotation
            weapon.trackSprite(sprite, 0, 0, true);

            cursors = this.input.keyboard.createCursorKeys();

            fireButton = this.input.keyboard.addKey(window.Phaser.KeyCode.SPACEBAR);
        },
        update: function () {
            if (cursors.up.isDown) {
               game.physics.arcade.accelerationFromRotation(sprite.rotation, 300, sprite.body.acceleration);
            }
            else {
                sprite.body.acceleration.set(0);
            }

            if (cursors.left.isDown) {
                sprite.body.angularVelocity = -300;
            }
            else if (cursors.right.isDown) {
                sprite.body.angularVelocity = 300;
            }
            else {
                sprite.body.angularVelocity = 0;
            }

            if (fireButton.isDown) {
                weapon.fire();
            }

            game.world.wrap(sprite, 16);

        },
        render: function () {
            //used for debugging
            weapon.debug();
        }

    }
}