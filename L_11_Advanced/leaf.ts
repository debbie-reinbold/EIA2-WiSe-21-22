namespace Advanced {
    export class Leaf extends Moveable {
        public randomScaleX: number;
        public randomScaleY: number;
        private randomNumber: number = (Math.floor(Math.random() * 800) + 200);
        private counter: number = 0;

        constructor(_position: Vector, _velocity: Vector, _randomScale: Vector) {
            super(_position, _velocity);
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }

        public update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

           // if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
             //   this.velocityY = -this.velocityY;
           // }

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

        protected draw(): void {

            crc2.save();
            crc2.translate(this.posX, this.posY);

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
}

    
