namespace L08_GenerativeArt {
    // habe mit Tini, Asya und Lisa gearbeitet 
    // load listener auf Window intallieren 
    window.addEventListener("load", handleLoad);

    // 2D Kontext und den Refreshbutton deklarieren 
    let crc2: CanvasRenderingContext2D;
    let reloadBtn: HTMLButtonElement;
    
   
    
    function handleLoad(): void {
        // Reload Button finden und einen Eventlistener darauf installieren 
        reloadBtn = document.querySelector("#reloadBtn")!;
        reloadBtn.addEventListener("click", reload);

        // Canvas finden 
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        
        crc2 = canvas.getContext("2d")!;

        // Funktionsaufruf für den Hintergrund 
        drawBackground();

        // Funktionsaufruf um drei verschiedene Kreise zu malen 
        for (let i: number = 0; i < 3; i++) {
        drawBubbles();    
        }
        // Funktion für Text aufrufen
        drawText();
        
    }

    // Hintergrund weiß färben
    function drawBackground(): void {
        
        crc2.fillStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    // Kreise zeichen und füllen 
    function drawBubbles(): void {
        let circles: number = 100;
        let bubbles: Path2D = new Path2D (); 
        bubbles.arc(0, 0, Math.random() * 20 + 40 , 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(0 * Math.random(), 0 * Math.random());
        crc2.fillStyle = generateColor();
        crc2.fill();

        for (let iCircles: number = 0; iCircles < circles; iCircles++) {
            crc2.save();
            let x: number = Math.random() * 500 * 2 ;
            let y: number = Math.random() * 900 * 2 ;
            crc2.translate(x, y);
            crc2.fill(bubbles);
            crc2.restore();
        }
        crc2.restore();
    } 


    // zufällige Farben mit Math.random generieren
    function generateColor(): string {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        let opacity: number = Math.random() * 0.6 + 0.2;
        let color: string = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
        return color;
        
    }
    // Text schreiben 
    function drawText(): void {
        let x: number = Math.random() * 500 ;
        let y: number = Math.random() * 900 ;

        crc2.strokeStyle = "black";
        crc2.font = "90px Arial";
        crc2.strokeText("TALD <3", x, y);

    }

    // Seite neu laden
    function reload(): void {
        window.location.reload();
    }
}
