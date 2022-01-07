namespace Polymorphie {
    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(0.65, "#DC7726");
        gradient.addColorStop(.8,  "#104210");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    export function drawSun(_position: Vector): void {
        let r1: number = 20;
        let r2: number = 70;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "#fdffd1");
        gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawEvergreen(_min: number, _max: number, _minSize: number, _maxSize: number): void {
        let stepMin: number = 20;
        let stepMax: number = 200;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * goldenCut;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 15));

            let yTreeGreen: number = -40;
            let yTreeBrown: number = -120;
            let treeColor: string[] = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize: number = _minSize + Math.random() * (_maxSize - _minSize);

            crc2.scale(treeSize, treeSize);
            crc2.fillStyle = "#544026";
            crc2.fillRect(0, 0, 22, -40);

            for (let z: number = 0; z < 3; z++) {
                crc2.beginPath();
                crc2.moveTo(-50, yTreeGreen);
                crc2.lineTo(72, yTreeGreen);
                crc2.lineTo(11, yTreeBrown);
                crc2.closePath();
                crc2.fillStyle = treeColor[z];
                crc2.fill();

                yTreeGreen += -40;
                yTreeBrown += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    

}