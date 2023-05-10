export var CALC;
(function (CALC) {
    var struct;
    (function (struct) {
        class Rectangle {
            consutuctor(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            contains(x, y) {
                if (x >= this.x &&
                    x <= this.x + this.width &&
                    y >= this.y &&
                    y <= this.y + this.height) {
                    return true;
                }
                return false;
            }
        }
        struct.Rectangle = Rectangle;
    })(struct = CALC.struct || (CALC.struct = {}));
})(CALC || (CALC = {}));
