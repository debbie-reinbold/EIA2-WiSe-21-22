namespace Aufgabe9_2 {

    export class Leaf {
        posX: number;
        posY: number;
        velocityX: number;
        velocityY: number;
        type: number;

        constructor(_position: Vector, _velocity: Vector, _type: number) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.type = _type;
        }


        leafType(_type: number): void {

            switch (_type) {
                case 1:
                    drawLeafsBrown();
                    break;
                default:
                    drawLeafsOrangeFalling();
            }

            function drawLeafsBrown(): void {
                for (let i: number = 0; i < 25; i++) {
                    let x: number = Math.random() * 1000;
                    let y: number = Math.random() * -300;

                    crc2.save();
                    crc2.translate(x, y);

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

            function drawLeafsOrangeFalling(): void {

                let nLeaves: number = 50;
                let r: number = 15;
        
                for (let drawn: number = 0; drawn < nLeaves; drawn++) {
                    let leaves: Path2D = new Path2D();
                    let x: number = Math.random() * 1000;
                    let y: number = Math.random() * 600;
        
        
                    leaves.arc(x, y, r, 199, 50 * Math.PI);
                    crc2.fillStyle = "#DC7726";
                    crc2.fill(leaves);
                }
            }
        }

    }

}