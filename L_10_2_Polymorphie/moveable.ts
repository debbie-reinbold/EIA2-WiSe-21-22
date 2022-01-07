namespace Polymorphie {
    export class Moveable {
        public posX: number;
        public posY: number;
    
        public velocityX: number;
        public velocityY: number;
    
        constructor(_position: Vector, _velocity: Vector) {
              this.posX = _position.x; 
              this.posY = _position.y; 
    
              this.velocityX = _velocity.x;
              this.velocityY = _velocity.y;
        }
    
        draw(): void {
            //
        }
    
        update(): void {
            //
        }
    }
}