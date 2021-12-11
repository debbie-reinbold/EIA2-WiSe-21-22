"use strict";
/*
Aufgabe: <Aufgabe_9.2>
Name: <Debbie Reinbold>
Matrikel: <268174>
Datum: <11.12.2021>
Quellen: <Zusammengearbeitet mit Tini, Asya, Lisa >
*/
/*ich war leider etwas unter Zeitdruck... Ich hab zwar eine Vorstellung gehabt, was erreicht werden
soll, doch der Code hängt an vielen Stellen, aber ich hatte keine Zeit mehr, daran zu arbeiten, bin um 23.34 Uhr "fertig" geworden :D
Sorry for that :( */
var Aufgabe9_2;
(function (Aufgabe9_2) {
    Aufgabe9_2.backgroundPosition = 0.5;
    let imageData;
    let clouds = [];
    let squirrel;
    let leafs = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Aufgabe9_2.crc2 = canvas.getContext("2d");
        Aufgabe9_2.crc2 = canvas.getContext("2d");
        if (!canvas)
            return;
        let horizon = Aufgabe9_2.crc2.canvas.height * Aufgabe9_2.backgroundPosition;
        let posMountains = { x: 0, y: horizon };
        Aufgabe9_2.drawBackground();
        Aufgabe9_2.drawSun({ x: 870, y: 55 });
        Aufgabe9_2.drawMountains(posMountains, 75, 150, "#8b5a2b", "#F6F0E7");
        Aufgabe9_2.drawMountains(posMountains, 50, 110, "#8C5249", "lightgrey");
        Aufgabe9_2.drawTree({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 8; index++) {
            Aufgabe9_2.drawEvergreen({ x: Math.random() * 1536, y: Math.random() * 220 });
        }
        Aufgabe9_2.drawBush({ x: 300, y: 300 }, { x: 70, y: 70 }, 250, 300);
        imageData = Aufgabe9_2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createCloud();
        createLeaf();
        createSquirrel();
        animate();
    }
    function createCloud() {
        clouds.push(new Aufgabe9_2.Cloud({ x: Aufgabe9_2.crc2.canvas.width * .7, y: Aufgabe9_2.crc2.canvas.height * 0.19 }));
        clouds.push(new Aufgabe9_2.Cloud({ x: Aufgabe9_2.crc2.canvas.width * .10, y: Aufgabe9_2.crc2.canvas.height * 0.23 }));
        clouds.push(new Aufgabe9_2.Cloud({ x: Aufgabe9_2.crc2.canvas.width * .5, y: Aufgabe9_2.crc2.canvas.height * 0.2 }));
        clouds.push(new Aufgabe9_2.Cloud({ x: Aufgabe9_2.crc2.canvas.width * .2, y: Aufgabe9_2.crc2.canvas.height * 0.2 }));
    }
    /*function createLeaf(): void {
        for (let i: number = 0; i < 20; i++) {

            let randomLeafType: number = Math.floor(Math.random() * 2);

            let leaf: Leaf = new Leaf(randomLeafType);
            leafs.push(leaf);
            //leafs.push(leaf2);
            leaf.drawLeafsBrown();
        }
    }*/
    function animate() {
        requestAnimationFrame(animate);
        Aufgabe9_2.crc2.clearRect(0, 0, Aufgabe9_2.crc2.canvas.width, Aufgabe9_2.crc2.canvas.height);
        Aufgabe9_2.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=main.js.map