namespace Aufgabe9_2 {

export function drawBackground(): void {
    // console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "#A7D3FF");
    gradient.addColorStop(backgroundPosition, "#DC7726");
    gradient.addColorStop(1, "#104210");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
export function drawSun(_position: Vector): void {
    // console.log("Sun", _position);

    let r1: number = 30;
    let r2: number = 100;
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

    gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
    gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();
}

export function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
    //console.log("Mountains", _position, _min, _max);
    let stepMin: number = 50;
    let stepMax: number = 50;
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

export function drawTree(_position2: Vector, _size2: Vector, _min2: number, _max2: number): void {
    let stepMin: number = 50;
    let stepMax: number = 100;
    let x: number = -10;
    let position: number = crc2.canvas.height * backgroundPosition;

    do {
        let y: number = -_min2 - Math.random() * (_max2 - _min2);
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

        let nParticles: number = 70;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#DC7726");
        gradient.addColorStop(1, "#57896A");

        crc2.save();
        crc2.translate(_position2.x, _position2.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size2.x;
            let y: number = - (Math.random() * _size2.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }

        x += stepMin + Math.random() * (stepMax - stepMin);
        crc2.restore();

    }
    while (x < crc2.canvas.width);
}

export function drawEvergreen(_position: Vector): void {

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
export function drawBush(_position: Vector, _size: Vector, _min: number, _max: number): void {
    let stepMin: number = 350;
    let stepMax: number = 50;
    let x: number = 0;
    let position: number = crc2.canvas.height * backgroundPosition;

    do {
        let y: number = -_min - Math.random() * (_max - _min);
        crc2.save();
        crc2.translate(x, y + (position + 100));


        let nParticles: number = 30;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 9 * Math.PI);
        gradient.addColorStop(0, "#DC7726");
        gradient.addColorStop(1, "#446C31");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        x += stepMin + Math.random() * (stepMax - stepMin);
        crc2.restore();


    }

    while (x < crc2.canvas.width);

}

}
