"use strict";
/*
Aufgabe: <Aufgabe_10.2>
Name: <Debbie Reinbold>
Matrikel: <268174>
Datum: <08.01.2022>
Quellen: <Zusammengearbeitet mit Tini, Asya, Lisa >
*/
var Polymorphie;
(function (Polymorphie) {
    Polymorphie.goldenCut = 0.62;
    let moveable = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Polymorphie.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createLeafs(30);
        createSquirrel(8);
        createCloud();
        imageData = Polymorphie.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Polymorphie.crc2.canvas.height * Polymorphie.goldenCut;
        let posMountains = { x: 0, y: horizon };
        Polymorphie.drawBackground();
        Polymorphie.drawSun({ x: Polymorphie.crc2.canvas.width * .15, y: Polymorphie.crc2.canvas.height * .2 });
        Polymorphie.drawMountains(posMountains, 75, 200, "#8b5a2b", "#F6F0E7");
        Polymorphie.drawMountains(posMountains, 50, 150, "#8C5249", "lightgrey");
        Polymorphie.drawEvergreen(-30, -50, .6, .9);
    }
    function createLeafs(_nLeaf) {
        for (let index = 0; index < _nLeaf; index++) {
            let randomScaleY = 0.8 + Math.random() * (0.1 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Polymorphie.Leaf({ x: Polymorphie.crc2.canvas.width, y: Polymorphie.crc2.canvas.height * -0.7 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createSquirrel(_nSquirrel) {
        for (let index = 0; index < _nSquirrel; index++) {
            let randomScaleY = 0.90 + Math.random() * (0.30 - 0.10);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 2;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Polymorphie.Squirrel({ x: Polymorphie.crc2.canvas.width / 2, y: Polymorphie.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .7, y: Polymorphie.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .10, y: Polymorphie.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .5, y: Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .2, y: Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Polymorphie.crc2.clearRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
        Polymorphie.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
            moveable[index].draw();
        }
    }
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=main.js.map