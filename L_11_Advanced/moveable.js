"use strict";
var Advanced;
(function (Advanced) {
    class Moveable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        update() {
            //
        }
        draw() {
            //
        }
    }
    Advanced.Moveable = Moveable;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=moveable.js.map