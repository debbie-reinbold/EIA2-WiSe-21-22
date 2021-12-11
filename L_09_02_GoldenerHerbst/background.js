"use strict";
var Aufgabe9_2;
(function (Aufgabe9_2) {
    function drawBackground() {
        // console.log("Background");
        let gradient = Aufgabe9_2.crc2.createLinearGradient(0, 0, 0, Aufgabe9_2.crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(Aufgabe9_2.backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");
        Aufgabe9_2.crc2.fillStyle = gradient;
        Aufgabe9_2.crc2.fillRect(0, 0, Aufgabe9_2.crc2.canvas.width, Aufgabe9_2.crc2.canvas.height);
    }
    Aufgabe9_2.drawBackground = drawBackground;
    function drawSun(_position) {
        // console.log("Sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = Aufgabe9_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Aufgabe9_2.crc2.save();
        Aufgabe9_2.crc2.translate(_position.x, _position.y);
        Aufgabe9_2.crc2.fillStyle = gradient;
        Aufgabe9_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.restore();
    }
    Aufgabe9_2.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        //console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        Aufgabe9_2.crc2.save();
        Aufgabe9_2.crc2.translate(_position.x, _position.y);
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(0, 0);
        Aufgabe9_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Aufgabe9_2.crc2.lineTo(x, y);
        } while (x < Aufgabe9_2.crc2.canvas.width);
        Aufgabe9_2.crc2.lineTo(x, 0);
        Aufgabe9_2.crc2.closePath();
        let gradient = Aufgabe9_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Aufgabe9_2.crc2.fillStyle = gradient;
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.restore();
    }
    Aufgabe9_2.drawMountains = drawMountains;
    function drawTree(_position2, _size2, _min2, _max2) {
        let stepMin = 50;
        let stepMax = 100;
        let x = -10;
        let position = Aufgabe9_2.crc2.canvas.height * Aufgabe9_2.backgroundPosition;
        do {
            let y = -_min2 - Math.random() * (_max2 - _min2);
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(x, y + (position + 20));
            Aufgabe9_2.crc2.beginPath();
            Aufgabe9_2.crc2.moveTo(0, 430);
            Aufgabe9_2.crc2.lineTo(0, 430);
            Aufgabe9_2.crc2.lineTo(-20, 430);
            Aufgabe9_2.crc2.lineTo(-20, 380);
            Aufgabe9_2.crc2.lineTo(0, 380);
            Aufgabe9_2.crc2.fillStyle = "#45311D";
            Aufgabe9_2.crc2.lineWidth = 1;
            Aufgabe9_2.crc2.closePath();
            Aufgabe9_2.crc2.fill();
            let nParticles = 70;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = Aufgabe9_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#DC7726");
            gradient.addColorStop(1, "#57896A");
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(_position2.x, _position2.y);
            Aufgabe9_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Aufgabe9_2.crc2.save();
                let x = (Math.random() - 0.5) * _size2.x;
                let y = -(Math.random() * _size2.y);
                Aufgabe9_2.crc2.translate(x, y);
                Aufgabe9_2.crc2.fill(particle);
                Aufgabe9_2.crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Aufgabe9_2.crc2.restore();
        } while (x < Aufgabe9_2.crc2.canvas.width);
    }
    Aufgabe9_2.drawTree = drawTree;
    function drawEvergreen(_position) {
        Aufgabe9_2.crc2.resetTransform();
        Aufgabe9_2.crc2.save();
        Aufgabe9_2.crc2.translate(_position.x, _position.y);
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(300, 330);
        Aufgabe9_2.crc2.lineTo(300, 330);
        Aufgabe9_2.crc2.lineTo(280, 330);
        Aufgabe9_2.crc2.lineTo(280, 280);
        Aufgabe9_2.crc2.lineTo(300, 280);
        Aufgabe9_2.crc2.fillStyle = "#45311D";
        Aufgabe9_2.crc2.lineWidth = 1;
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.closePath();
        Aufgabe9_2.crc2.beginPath();
        Aufgabe9_2.crc2.moveTo(280, 280);
        Aufgabe9_2.crc2.lineTo(280, 280);
        Aufgabe9_2.crc2.lineTo(220, 280);
        Aufgabe9_2.crc2.lineTo(260, 245);
        Aufgabe9_2.crc2.lineTo(230, 245);
        Aufgabe9_2.crc2.lineTo(260, 215);
        Aufgabe9_2.crc2.lineTo(245, 215);
        Aufgabe9_2.crc2.lineTo(290, 175); //Spitze
        Aufgabe9_2.crc2.lineTo(335, 215);
        Aufgabe9_2.crc2.lineTo(320, 215);
        Aufgabe9_2.crc2.lineTo(350, 245);
        Aufgabe9_2.crc2.lineTo(320, 245);
        Aufgabe9_2.crc2.lineTo(370, 280);
        Aufgabe9_2.crc2.lineTo(280, 280);
        Aufgabe9_2.crc2.fillStyle = "#1F320B";
        Aufgabe9_2.crc2.fill();
        Aufgabe9_2.crc2.closePath();
        Aufgabe9_2.crc2.restore();
    }
    Aufgabe9_2.drawEvergreen = drawEvergreen;
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 350;
        let stepMax = 50;
        let x = 0;
        let position = Aufgabe9_2.crc2.canvas.height * Aufgabe9_2.backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(x, y + (position + 100));
            let nParticles = 30;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = Aufgabe9_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 9 * Math.PI);
            gradient.addColorStop(0, "#DC7726");
            gradient.addColorStop(1, "#446C31");
            Aufgabe9_2.crc2.save();
            Aufgabe9_2.crc2.translate(_position.x, _position.y);
            Aufgabe9_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Aufgabe9_2.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                Aufgabe9_2.crc2.translate(x, y);
                Aufgabe9_2.crc2.fill(particle);
                Aufgabe9_2.crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Aufgabe9_2.crc2.restore();
        } while (x < Aufgabe9_2.crc2.canvas.width);
    }
    Aufgabe9_2.drawBush = drawBush;
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=background.js.map