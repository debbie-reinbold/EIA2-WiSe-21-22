"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Cloud extends Polymorphie.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, Polymorphie.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.7, "black");
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            Polymorphie.crc2.scale(0.6, 0.6);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(-115, -20);
            Polymorphie.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Polymorphie.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Polymorphie.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Polymorphie.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Polymorphie.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Polymorphie.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Polymorphie.crc2.fillStyle = gradient;
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    Polymorphie.Cloud = Cloud;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=cloud.js.map