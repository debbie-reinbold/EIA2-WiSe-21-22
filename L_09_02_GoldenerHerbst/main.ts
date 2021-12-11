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

namespace Aufgabe9_2 {

    export let crc2: CanvasRenderingContext2D;
    export let backgroundPosition: number = 0.5;
    let imageData: ImageData;

    let clouds: Cloud[] = [];
    let squirrel: Squirrel;
    let leafs: Leaf[] = [];

    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2 = canvas.getContext("2d")!;
        if (!canvas)
            return;

        let horizon: number = crc2.canvas.height * backgroundPosition;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawSun({ x: 870, y: 55 });
        drawMountains(posMountains, 75, 150, "#8b5a2b", "#F6F0E7");
        drawMountains(posMountains, 50, 110, "#8C5249", "lightgrey");
        drawTree({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);

        for (let index: number = 0; index < 8; index++) {
            drawEvergreen({ x: Math.random() * 1536, y: Math.random() * 220 });
        }

        drawBush({ x: 300, y: 300 }, { x: 70, y: 70 }, 250, 300);


        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createCloud();
        createLeaf();
        createSquirrel();
        animate();

    }



    function createCloud(): void {
        clouds.push(new Cloud({ x: crc2.canvas.width * .7, y: crc2.canvas.height * 0.19 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * 0.23 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * 0.2 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .2, y: crc2.canvas.height * 0.2 }));
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


    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        
        for (let index: number = 0; index < clouds.length; index++) {
            clouds[index].update();
        }

    }
}

