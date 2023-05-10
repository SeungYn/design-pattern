export var CALC;
(function (CALC) {
    var mvc;
    (function (mvc) {
        class CalcController {
            constructor(calcModel, calcView) {
                this.calcModel = calcModel;
                this.calcView = calcView;
            }
            add() {
                let firstNumber = this.calcModel.getFirstNumber();
                let secondNumber = this.calcModel.getSecondNumber();
                return firstNumber + secondNumber;
            }
            divide() {
                let firstNumber = this.calcModel.getFirstNumber();
                let secondNumber = this.calcModel.getSecondNumber();
                return firstNumber / secondNumber;
            }
            multiply() {
                let firstNumber = this.calcModel.getFirstNumber();
                let secondNumber = this.calcModel.getSecondNumber();
                return firstNumber * secondNumber;
            }
            substract() {
                let firstNumber = this.calcModel.getFirstNumber();
                let secondNumber = this.calcModel.getSecondNumber();
                return firstNumber - secondNumber;
            }
            decreaseFirstNumber() {
                this.calcModel.decreaseFirstNumber();
                this.calcView.synchronizeModelAndView();
                this.calcView.render();
            }
            decreaseSecondNumber() {
                this.calcModel.decreaseSecondNumber();
                this.calcView.synchronizeModelAndView();
                this.calcView.render();
            }
            increaseFirstNumber() {
                this.calcModel.increaseFirstNumber();
                this.calcView.synchronizeModelAndView();
                this.calcView.render();
            }
            increaseSecondNumber() {
                this.calcModel.increaseSecondNumber();
                this.calcView.synchronizeModelAndView();
                this.calcView.render();
            }
        }
        mvc.CalcController = CalcController;
    })(mvc = CALC.mvc || (CALC.mvc = {}));
})(CALC || (CALC = {}));
