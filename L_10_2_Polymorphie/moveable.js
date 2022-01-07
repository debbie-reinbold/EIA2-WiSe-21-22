"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Moveable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //
        }
        update() {
            //
        }
    }
    Polymorphie.Moveable = Moveable;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=moveable.js.map