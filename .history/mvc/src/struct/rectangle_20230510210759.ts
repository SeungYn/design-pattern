export namespace CALC.struct {
  export class Rectangle {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    consutuctor(x: number, y: number, width: number, height: number) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    contains(x: number, y: number): boolean {
      if (
        x >= this.x &&
        x <= this.x + this.width &&
        y >= this.y &&
        y <= this.y + this.height
      ) {
        return true;
      }

      return false;
    }
  }
}
