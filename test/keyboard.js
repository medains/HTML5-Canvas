"use strict";

var Keyboard = function() {}

Keyboard.prototype = {
    KEY_NAME_THRUSTER : "up",
    KEY_NAME_TELEPORT : "t",
    KEY_NAME_LEFT     : "left",
    KEY_NAME_RIGHT    : "right",
    KEY_NAME_SPACE    : "space",
    KEY_NAME_HELP     : "h",
    KEY_NAME_MAP      : "m",
    KEY_NAME_SMART    : "s",
    KEY_TYPE_UP       : "keyup",
    KEY_TYPE_DOWN     : "keydown",
    KEY_NAME_CTRL     : "control",
    KEY_NAME_SCORE    : "score"
};

/**
 * Player key bindings
 */
Keyboard.prototype.keyEvent = function (keyCode, type, player) {
    var keyName = String.fromCharCode(keyCode).toLowerCase();

    if (keyCode == 37) {
        keyName = this.KEY_NAME_LEFT;
    }   // Left arrow key

    if (keyCode == 39) {
        keyName = this.KEY_NAME_RIGHT;
    }   // Right arrow key

    if (keyCode == 38) {
        keyName = this.KEY_NAME_THRUSTER;
    }   // Up arrow key

    if (keyCode == 32) {
        keyName = this.KEY_NAME_SPACE;
    }   // space bar

    if (keyCode == 17) {
        keyName = this.KEY_NAME_CTRL;
    }   // left control

    if (keyCode == 40) {
        keyName = this.KEY_NAME_CTRL;
    }   // down arrow (bloody MACS)

    if (keyCode == 84) {
        keyName = this.KEY_NAME_TELEPORT;
    }   // left control

    if (keyCode == 77) {
        keyName = this.KEY_NAME_MAP;
    }   // left control

    this.move(type, keyName, player);
}

/**
 * Act on key press
 */
Keyboard.prototype.move = function (keyType, keyName, player) {

    // Thruster is off
    if (keyName == this.KEY_NAME_THRUSTER && keyType == this.KEY_TYPE_UP) {
        player.thruster = false;
        player._thrust = 0;

    }
    // Thruster on
    else if (keyName == this.KEY_NAME_THRUSTER && keyType == this.KEY_TYPE_DOWN) {
        player.thruster = true;
        player._thrust = 0.05;
    }
    // Turning left
    if (keyName == this.KEY_NAME_LEFT && keyType == this.KEY_TYPE_DOWN) {
        player.vr = -7;
        player.radian = -0.05;
        player.rotate();
    }
    // Turning right
    if (keyName == this.KEY_NAME_RIGHT && keyType == this.KEY_TYPE_DOWN) {
        player.vr = 7;
        player.radian = 0.05;
        player.rotate();
    }
    // Stop turning
    if ((keyName == this.KEY_NAME_RIGHT || keyName == this.KEY_NAME_LEFT ) && keyType == this.KEY_TYPE_UP) {
        player.vr = 0;
       // player.rotate(0.05)
    }

    if (keyName == this.KEY_NAME_CTRL && keyType == this.KEY_TYPE_DOWN) {
        player.sheild = true;
    }

    if (keyName == this.KEY_NAME_CTRL && keyType == this.KEY_TYPE_UP) {
        player.sheild = false;
    }

}