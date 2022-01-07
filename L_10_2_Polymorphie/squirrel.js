"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Squirrel extends Polymorphie.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        draw() {
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            // Schwanz 
            Polymorphie.crc2.scale(this.randomScaleX, this.randomScaleY);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.fillStyle = "brown";
            Polymorphie.crc2.ellipse(-20, -25, 14, 28, 12, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            // Arm
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(35, -30, 5, 15, 2, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            // Bauch 
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(10, -20, 20, 29, 10, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            //Ohren 
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(1, -65, 10, 3, 10, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(30, -65, 10, 3, 15, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            //Kopf 
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(15, -50, 13, 13, 0, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            // Füße 
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(15, -2, 5, 25, -80, 20, 40);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height || this.posY < Polymorphie.crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }
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
    Polymorphie.Squirrel = Squirrel;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=squirrel.js.map