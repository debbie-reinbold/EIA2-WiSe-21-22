"use strict";
var Aufgabe9_2;
(function (Aufgabe9_2) {
    class Cloud {
        constructor(_position) {
            this.velocityX = 0.17;
            this.velocityY = 0.1;
            this.posY = _position.y;
            this.posX = _position.x;
        }
        draw() {
            let gradient = Aufgabe9_2.crc2.createLinearGradient(0, 0, 0, Aufgabe9_2.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.7, "black");
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(this.posX, this.posY);
            Aufgabe9_2.crc2.scale(0.6, 0.6);
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.moveTo(-115, -20);
            Aufgabe9_2.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Aufgabe9_2.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Aufgabe9_2.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Aufgabe9_2.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Aufgabe9_2.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Aufgabe9_2.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Aufgabe9_2.crc2.fillStyle = gradient;
            Aufgabe9_2.crc2.fill();
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.restore();
        }
        update() {
            if (this.posX > Aufgabe9_2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Aufgabe9_2.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    Aufgabe9_2.Cloud = Cloud;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=cloud.js.map