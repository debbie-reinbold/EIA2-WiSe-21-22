"use strict";
var Advanced;
(function (Advanced) {
    class Cloud extends Advanced.Moveable {
        update() {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Advanced.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
        draw() {
            let gradient = Advanced.crc2.createLinearGradient(0, 0, 0, Advanced.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.7, "black");
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            Advanced.crc2.scale(0.6, 0.6);
            Advanced.crc2.beginPath();
            Advanced.crc2.moveTo(-115, -20);
            Advanced.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Advanced.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Advanced.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Advanced.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Advanced.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Advanced.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Advanced.crc2.fillStyle = gradient;
            Advanced.crc2.fill();
            Advanced.crc2.closePath();
            Advanced.crc2.restore();
        }
    }
    Advanced.Cloud = Cloud;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=cloud.js.map