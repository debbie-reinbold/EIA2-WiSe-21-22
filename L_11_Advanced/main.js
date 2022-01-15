"use strict";
/*
Aufgabe: <Aufgabe_11.1>
Name: <Debbie Reinbold>
Matrikel: <268174>
Datum: <15.01.2022>
Quellen: <Zusammengearbeitet mit Tini, Asya, Lisa >
*/
/*Code zeitlich leider nicht mehr geschafft. abstract, private ... an die passenden Stellen
hinzugefügt*/
var Advanced;
(function (Advanced) {
    Advanced.goldenCut = 0.62;
    let moveable = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Advanced.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createLeafs(30);
        createSquirrel(8);
        createCloud();
        imageData = Advanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Advanced.crc2.canvas.height * Advanced.goldenCut;
        let posMountains = { x: 0, y: horizon };
        Advanced.drawBackground();
        Advanced.drawSun({ x: Advanced.crc2.canvas.width * .15, y: Advanced.crc2.canvas.height * .2 });
        Advanced.drawMountains(posMountains, 75, 200, "#8b5a2b", "#F6F0E7");
        Advanced.drawMountains(posMountains, 50, 150, "#8C5249", "lightgrey");
        Advanced.drawEvergreen(-30, -50, .6, .9);
    }
    function createLeafs(_nLeaf) {
        for (let index = 0; index < _nLeaf; index++) {
            let randomScaleY = 0.8 + Math.random() * (0.1 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Advanced.Leaf({ x: Advanced.crc2.canvas.width, y: Advanced.crc2.canvas.height * -0.7 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createSquirrel(_nSquirrel) {
        for (let index = 0; index < _nSquirrel; index++) {
            let randomScaleY = 0.90 + Math.random() * (0.30 - 0.10);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 2;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Advanced.Squirrel({ x: Advanced.crc2.canvas.width / 2, y: Advanced.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    //function createHazelnut(_event: MouseEvent): void {
    // }
    function createCloud() {
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .7, y: Advanced.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .10, y: Advanced.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .5, y: Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .2, y: Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Advanced.crc2.clearRect(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
        Advanced.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
        }
    }
})(Advanced || (Advanced = {}));
//# sourceMappingURL=main.js.map