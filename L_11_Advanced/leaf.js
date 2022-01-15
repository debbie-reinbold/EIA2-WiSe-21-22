"use strict";
var Advanced;
(function (Advanced) {
    class Leaf extends Advanced.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 200);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        update() {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
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
        draw() {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            Advanced.crc2.fillStyle = "#8A4B08";
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(20, 570, 6, 0, 2 * Math.PI);
            Advanced.crc2.arc(25, 575, 10, 0, 2 * Math.PI);
            Advanced.crc2.arc(30, 580, 12, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.lineWidth = 3;
            Advanced.crc2.strokeStyle = "#191007";
            Advanced.crc2.beginPath();
            Advanced.crc2.moveTo(35, 582);
            Advanced.crc2.lineTo(50, 590);
            Advanced.crc2.stroke();
            Advanced.crc2.restore();
        }
    }
    Advanced.Leaf = Leaf;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=leaf.js.map