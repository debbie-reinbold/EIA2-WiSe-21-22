"use strict";
var Aufgabe9_2;
(function (Aufgabe9_2) {
    class Squirrel {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            Aufgabe9_2.crc2.resetTransform();
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(_position.x, _position.y);
            // Schwanz 
            Aufgabe9_2.crc2.fillStyle = "brown";
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(-20, -25, 14, 28, 12, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            // Arm
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(35, -30, 5, 15, 2, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            // Bauch 
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(10, -20, 20, 29, 10, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            //Ohren 
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(1, -65, 10, 3, 10, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(30, -65, 10, 3, 15, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            //Kopf 
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(15, -50, 13, 13, 0, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            // Füße 
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.ellipse(15, -2, 5, 25, -80, 20, 40);
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.restore();
        }
        update() {
            if (this.posX > Aufgabe9_2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Aufgabe9_2.crc2.canvas.height || this.posY < Aufgabe9_2.crc2.canvas.height * 0.65) {
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
    Aufgabe9_2.Squirrel = Squirrel;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=squirrel.js.map