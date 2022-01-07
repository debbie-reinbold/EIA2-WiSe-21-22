"use strict";
var Polymorphie;
(function (Polymorphie) {
    function drawBackground() {
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, Polymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(0.65, "#DC7726");
        gradient.addColorStop(.8, "#104210");
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fillRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
    }
    Polymorphie.drawBackground = drawBackground;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_position.x, _position.y);
        Polymorphie.crc2.beginPath();
        Polymorphie.crc2.moveTo(0, 0);
        Polymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Polymorphie.crc2.lineTo(x, y);
        } while (x < Polymorphie.crc2.canvas.width);
        Polymorphie.crc2.lineTo(x, 0);
        Polymorphie.crc2.closePath();
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fill();
        Polymorphie.crc2.restore();
    }
    Polymorphie.drawMountains = drawMountains;
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 70;
        let gradient = Polymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#fdffd1");
        gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_position.x, _position.y);
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Polymorphie.crc2.fill();
        Polymorphie.crc2.restore();
    }
    Polymorphie.drawSun = drawSun;
    function drawEvergreen(_min, _max, _minSize, _maxSize) {
        let stepMin = 20;
        let stepMax = 200;
        let x = 0;
        let horizon = Polymorphie.crc2.canvas.height * Polymorphie.goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(x, y + (horizon + 15));
            let yTreeGreen = -40;
            let yTreeBrown = -120;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            Polymorphie.crc2.scale(treeSize, treeSize);
            Polymorphie.crc2.fillStyle = "#544026";
            Polymorphie.crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                Polymorphie.crc2.beginPath();
                Polymorphie.crc2.moveTo(-50, yTreeGreen);
                Polymorphie.crc2.lineTo(72, yTreeGreen);
                Polymorphie.crc2.lineTo(11, yTreeBrown);
                Polymorphie.crc2.closePath();
                Polymorphie.crc2.fillStyle = treeColor[z];
                Polymorphie.crc2.fill();
                yTreeGreen += -40;
                yTreeBrown += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Polymorphie.crc2.restore();
        } while (x < Polymorphie.crc2.canvas.width);
    }
    Polymorphie.drawEvergreen = drawEvergreen;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=background.js.map