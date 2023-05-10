import { CALC as calc } from './calc_model.js';
import { CALC as calc2 } from './calc_view';

export namespace CALC.mvc {
  import CalcModel = calc.mvc.CalcModel;
  import CalcView = calc2.mvc.CalcView;

  export class CalcController {
    private calcModel!: CalcModel;
    private calcView: CalcView;

    constructor(calcModel: CalcModel, calcView: CalcView) {
      this.calcModel = calcModel;
      this.calcView = calcView;
    }

    add(): number {
      let firstNumber = this.calcModel.getFirstNumber();
      let secondNumber = this.calcModel.getSecondNumber();

      return firstNumber + secondNumber;
    }

    divide(): number {
      let firstNumber = this.calcModel.getFirstNumber();
      let secondNumber = this.calcModel.getSecondNumber();

      return firstNumber / secondNumber;
    }

    multiply(): number {
      let firstNumber = this.calcModel.getFirstNumber();
      let secondNumber = this.calcModel.getSecondNumber();

      return firstNumber * secondNumber;
    }

    substract(): number {
      let firstNumber = this.calcModel.getFirstNumber();
      let secondNumber = this.calcModel.getSecondNumber();

      return firstNumber - secondNumber;
    }

    decreaseFirstNumber(): void {
      this.calcModel.decreaseFirstNumber();

      this.calcView.synchronizeModelAndView();
      this.calcView.render();
    }

    decreaseSecondNumber(): void {
      this.calcModel.decreaseSecondNumber();

      this.calcView.synchronizeModelAndView();
      this.calcView.render();
    }

    increaseFirstNumber(): void {
      this.calcModel.increaseFirstNumber();

      this.calcView.synchronizeModelAndView();
      this.calcView.render();
    }

    increaseSecondNumber(): void {
      this.calcModel.increaseSecondNumber();

      this.calcView.synchronizeModelAndView();
      this.calcView.render();
    }
  }
}
