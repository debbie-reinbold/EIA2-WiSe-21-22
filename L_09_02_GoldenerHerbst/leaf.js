"use strict";
var Aufgabe9_2;
(function (Aufgabe9_2) {
    class Leaf {
        constructor(_position, _velocity, _type) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.type = _type;
        }
        leafType(_type) {
            switch (_type) {
                case 1:
                    drawLeafsBrown();
                    break;
                default:
                    drawLeafsOrangeFalling();
            }
            function drawLeafsBrown() {
                for (let i = 0; i < 25; i++) {
                    let x = Math.random() * 1000;
                    let y = Math.random() * -300;
                    Aufgabe9_2.crc2.save();
                    Aufgabe9_2.crc2.translate(x, y);
                    Aufgabe9_2.crc2.fillStyle = "#8A4B08";
                    Aufgabe9_2.crc2.beginPath();
                    Aufgabe9_2.crc2.arc(20, 570, 6, 0, 2 * Math.PI);
                    Aufgabe9_2.crc2.arc(25, 575, 10, 0, 2 * Math.PI);
                    Aufgabe9_2.crc2.arc(30, 580, 12, 0, 2 * Math.PI);
                    Aufgabe9_2.crc2.closePath();
                    Aufgabe9_2.crc2.fill();
                    Aufgabe9_2.crc2.lineWidth = 3;
                    Aufgabe9_2.crc2.strokeStyle = "#191007";
                    Aufgabe9_2.crc2.beginPath();
                    Aufgabe9_2.crc2.moveTo(35, 582);
                    Aufgabe9_2.crc2.lineTo(50, 590);
                    Aufgabe9_2.crc2.stroke();
                    Aufgabe9_2.crc2.restore();
                }
            }
            function drawLeafsOrangeFalling() {
                let nLeaves = 50;
                let r = 15;
                for (let drawn = 0; drawn < nLeaves; drawn++) {
                    let leaves = new Path2D();
                    let x = Math.random() * 1000;
                    let y = Math.random() * 600;
                    leaves.arc(x, y, r, 199, 50 * Math.PI);
                    Aufgabe9_2.crc2.fillStyle = "#DC7726";
                    Aufgabe9_2.crc2.fill(leaves);
                }
            }
        }
    }
    Aufgabe9_2.Leaf = Leaf;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=leaf.js.map