namespace Polymorphie {
    export class Squirrel extends Moveable {
        public randomScaleX: number;
        public randomScaleY: number;
        public randomNumber: number = (Math.floor(Math.random() * 800) + 100);
        public counter: number = 0;

        constructor(_position: Vector, _velocity: Vector, _randomScale: Vector) {
            super(_position, _velocity);
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.posX, this.posY);

            // Schwanz 
            crc2.scale(this.randomScaleX, this.randomScaleY);
            crc2.beginPath();
            crc2.fillStyle = "brown";
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

        public update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }

            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter ++;
            this.draw();
        }
    }
}

    
