"use strict";
//transformation verketten, dann mit Transform rausgehen -> Hierarchische Struktur
//Eichhörnchen aus einzelnen Teilen zusammensetzen
/*
Aufgabe: <Aufgabe_08.2 Goldener Herbst>
Name: <Deborah Reinbold>
Matrikel: <268174>
Datum: <27.11.21>
Quellen: <Zusammengearbeitet mit Lisa, Asya, Christina; Inspiration vom Code Lektion 8>
*/
var GoldenerHerbst;
(function (GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let backgroundPosition = 0.5;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * backgroundPosition;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 870, y: 55 });
        drawCloud({ x: 300, y: 90 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 150, "#8b5a2b", "#F6F0E7");
        drawMountains(posMountains, 50, 110, "#8C5249", "lightgrey");
        drawLeafsOrangeFalling();
        drawLeafsBrown();
        drawTree({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 3; index++) {
            drawEvergreen({ x: Math.random() * 500, y: Math.random() * 20 });
        }
        drawBush({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 350);
        for (let index = 0; index < 3; index++) {
            drawSquirrel({ x: Math.random() * 1000, y: 250 + Math.random() * 100 });
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 45;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawLeafsOrangeFalling() {
        let nLeaves = 50;
        let r = 15;
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            let leaves = new Path2D();
            let x = Math.random() * 1000;
            let y = Math.random() * 600;
            leaves.arc(x, y, r, 199, 50 * Math.PI);
            crc2.fillStyle = "#DC7726";
            crc2.fill(leaves);
        }
    }
    function drawLeafsBrown() {
        for (let i = 0; i < 25; i++) {
            let x = Math.random() * 1000;
            let y = Math.random() * -300;
            crc2.save();
            crc2.translate(x, y);
            crc2.fillStyle = "#8A4B08";
            crc2.beginPath();
            crc2.arc(20, 570, 6, 0, 2 * Math.PI);
            crc2.arc(25, 575, 10, 0, 2 * Math.PI);
            crc2.arc(30, 580, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#191007";
            crc2.beginPath();
            crc2.moveTo(35, 582);
            crc2.lineTo(50, 590);
            crc2.stroke();
            crc2.restore();
        }
    }
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 350;
        let stepMax = 50;
        let x = 0;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 100));
            let nParticles = 30;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 9 * Math.PI);
            gradient.addColorStop(0, "#DC7726");
            gradient.addColorStop(1, "#446C31");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    /*function drawTrees2(_position: Vector, _size: Vector): void {
        crc2.beginPath();
        crc2.moveTo(100, 100);
        crc2.lineTo(200, 200);
        crc2.stroke();
    }*/
    function drawTree(_position2, _size2, _min2, _max2) {
        let stepMin = 50;
        let stepMax = 100;
        let x = -10;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min2 - Math.random() * (_max2 - _min2);
            crc2.save();
            crc2.translate(x, y + (position + 20));
            crc2.beginPath();
            crc2.moveTo(0, 430);
            crc2.lineTo(0, 430);
            crc2.lineTo(-20, 430);
            crc2.lineTo(-20, 380);
            crc2.lineTo(0, 380);
            crc2.fillStyle = "#45311D";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            let nParticles = 70;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#DC7726");
            gradient.addColorStop(1, "#57896A");
            crc2.save();
            crc2.translate(_position2.x, _position2.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size2.x;
                let y = -(Math.random() * _size2.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawEvergreen(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(300, 330);
        crc2.lineTo(300, 330);
        crc2.lineTo(280, 330);
        crc2.lineTo(280, 280);
        crc2.lineTo(300, 280);
        crc2.fillStyle = "#45311D";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(280, 280);
        crc2.lineTo(280, 280);
        crc2.lineTo(220, 280);
        crc2.lineTo(260, 245);
        crc2.lineTo(230, 245);
        crc2.lineTo(260, 215);
        crc2.lineTo(245, 215);
        crc2.lineTo(290, 175); //Spitze
        crc2.lineTo(335, 215);
        crc2.lineTo(320, 215);
        crc2.lineTo(350, 245);
        crc2.lineTo(320, 245);
        crc2.lineTo(370, 280);
        crc2.lineTo(280, 280);
        crc2.fillStyle = "#1F320B";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawSquirrel(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // Schwanz 
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.ellipse(-20, -25, 14, 28, 12, 20, 40);
        crc2.closePath();
        crc2.fill();
        // Arm
        crc2.beginPath();
        crc2.ellipse(35, -30, 5, 15, 2, 20, 40);
        crc2.closePath();
        crc2.fill();
        // Bauch 
        crc2.beginPath();
        crc2.ellipse(10, -20, 20, 29, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Ohren 
        crc2.beginPath();
        crc2.ellipse(1, -65, 10, 3, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(30, -65, 10, 3, 15, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Kopf 
        crc2.beginPath();
        crc2.ellipse(15, -50, 13, 13, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        // Füße 
        crc2.beginPath();
        crc2.ellipse(15, -2, 5, 25, -80, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=goldenerHerbst.js.map