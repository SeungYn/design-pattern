import { CALC as calc } from './calc_model.js';
import { CALC as calc2 } from './calc_controller.js';
import Expression from './components/Expression.js';

export namespace CALC.mvc {
  let PADDING = 30;
  let COLUMN_WIDTH = 60;
  let ROW_HEIGHT = 24;
  let BUTTON_SIZE = 24;

  import CalcModel = calc.mvc.CalcModel;
  import CalcController = calc2.mvc.CalcController;

  export class CalcView {
    minusExpression: Expression;
    constructor(private root: HTMLElement) {
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
}
