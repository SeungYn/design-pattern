import Expression from './components/Expression.js';
export var CALC;
(function (CALC) {
    var mvc;
    (function (mvc) {
        let PADDING = 30;
        let COLUMN_WIDTH = 60;
        let ROW_HEIGHT = 24;
        let BUTTON_SIZE = 24;
        class CalcView {
            constructor(root) {
                this.root = root;
                this.minusExpression = new Expression({
                    oper: '-',
                    firstNumber: 5,
                    secondNumber: 2,
                    result: 3,
                });
                console.log(123);
                this.render();
            }
            render() {
                this.root.append(this.minusExpression.element);
            }
        }
        mvc.CalcView = CalcView;
    })(mvc = CALC.mvc || (CALC.mvc = {}));
})(CALC || (CALC = {}));
