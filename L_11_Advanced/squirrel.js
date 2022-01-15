"use strict";
var Advanced;
(function (Advanced) {
    class Squirrel extends Advanced.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        update() {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Advanced.crc2.canvas.height || this.posY < Advanced.crc2.canvas.height * 0.65) {
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
        draw() {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            // Schwanz 
            Advanced.crc2.scale(this.randomScaleX, this.randomScaleY);
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "brown";
            Advanced.crc2.ellipse(-20, -25, 14, 28, 12, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Arm
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(35, -30, 5, 15, 2, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Bauch 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(10, -20, 20, 29, 10, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            //Ohren 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(1, -65, 10, 3, 10, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(30, -65, 10, 3, 15, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            //Kopf 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(15, -50, 13, 13, 0, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Füße 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(15, -2, 5, 25, -80, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
    }
    Advanced.Squirrel = Squirrel;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=squirrel.js.map