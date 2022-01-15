/*namespace Advanced {
    export class Hazelnut extends Moveable {

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
            this.velocity.random(0, 0);
           
        }
        

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.posX, this.posY , 10, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();
        }
    }
}*/