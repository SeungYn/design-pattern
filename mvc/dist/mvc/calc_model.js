export var CALC;
(function (CALC) {
    var mvc;
    (function (mvc) {
        class CalcModel {
            constructor() {
                this.firstNumber = 100;
                this.secondNumber = 10;
            }
            getFirstNumber() {
                return this.firstNumber;
            }
            getSecondNumber() {
                return this.secondNumber;
            }
            setFirstNumber(firstNumber) {
                this.firstNumber = firstNumber;
            }
            setSecondNumber(secondNumber) {
                this.secondNumber = secondNumber;
            }
            decreaseFirstNumber() {
                this.firstNumber -= 1;
            }
            decreaseSecondNumber() {
                this.secondNumber -= 1;
            }
            increaseFirstNumber() {
                this.firstNumber += 1;
            }
            increaseSecondNumber() {
                this.secondNumber += 1;
            }
        }
        mvc.CalcModel = CalcModel;
    })(mvc = CALC.mvc || (CALC.mvc = {}));
})(CALC || (CALC = {}));
