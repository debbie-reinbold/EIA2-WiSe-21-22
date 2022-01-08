"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Leaf extends Polymorphie.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 200);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        draw() {
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            Polymorphie.crc2.fillStyle = "#8A4B08";
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(20, 570, 6, 0, 2 * Math.PI);
            Polymorphie.crc2.arc(25, 575, 10, 0, 2 * Math.PI);
            Polymorphie.crc2.arc(30, 580, 12, 0, 2 * Math.PI);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            Polymorphie.crc2.lineWidth = 3;
            Polymorphie.crc2.strokeStyle = "#191007";
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(35, 582);
            Polymorphie.crc2.lineTo(50, 590);
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            // if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
            //   this.velocityY = -this.velocityY;
            // }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.draw();
        }
    }
    Polymorphie.Leaf = Leaf;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=leaf.js.map