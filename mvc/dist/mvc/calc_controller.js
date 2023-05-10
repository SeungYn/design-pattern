//import { CALC as calc2 } from './calc_view';
export var CALC;
(function (CALC) {
    var mvc;
    (function (mvc) {
        //import CalcView = calc2.mvc.CalcView;
        class CalcController {
            //private calcView: CalcView;
            constructor(calcModel) {
                this.calcModel = calcModel;
            }
            setCalcModel(calcModel) {
                this.calcModel = calcModel;
            }
            // setCalcView(calcView: CalcView): void{
            // 	this.calcView = calcView;
            // }
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
                //this.calcView.redraw();
            }
            decreaseSecondNumber() {
                this.calcModel.decreaseSecondNumber();
                //this.calcView.redraw();
            }
            increaseFirstNumber() {
                this.calcModel.increaseFirstNumber();
                //this.calcView.redraw();
            }
            increaseSecondNumber() {
                this.calcModel.increaseSecondNumber();
                //this.calcView.redraw();
            }
        }
        mvc.CalcController = CalcController;
    })(mvc = CALC.mvc || (CALC.mvc = {}));
})(CALC || (CALC = {}));
