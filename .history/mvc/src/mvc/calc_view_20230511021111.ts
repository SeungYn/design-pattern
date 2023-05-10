import { CALC as calc } from './calc_model.js';
import { CALC as calc2 } from './calc_controller.js';
import Expression, { OperType } from './components/Expression.js';
import Button from './components/Button.js';

export namespace CALC.mvc {
  import CalcModel = calc.mvc.CalcModel;
  import CalcController = calc2.mvc.CalcController;

  export class CalcView {
    calcModel: CalcModel;
    calcController: CalcController;
    plusExpression: Expression;
    diviExpression: Expression;
    multiExpression: Expression;
    minusExpression: Expression;
    firstButtonGroup: HTMLElement;
    secondButtonGroup: HTMLElement;

    constructor(private root: HTMLElement) {
      this.calcModel = new CalcModel();
      this.calcController = new CalcController(this.calcModel);

      //버튼 컴포넌트 생성
      const firstIncreaseButton = new Button(
        '+',
        this.clickHandler.bind(this, '+', 'first')
      );
      const firstDecreaseButton = new Button(
        '-',
        this.clickHandler.bind(this, '-', 'first')
      );

      const secondIncreaseButton = new Button(
        '+',
        this.clickHandler.bind(this, '+', 'second')
      );
      const secondDecreaseButton = new Button(
        '-',
        this.clickHandler.bind(this, '-', 'second')
      );

      //버튼 그룹 컴포넌트에 장착해주기
      this.firstButtonGroup = this.makeButtonGroup(
        firstIncreaseButton.element,
        firstDecreaseButton.element,
        '첫 번째 숫자 증가 감소 버튼들: '
      );
      this.secondButtonGroup = this.makeButtonGroup(
        secondIncreaseButton.element,
        secondDecreaseButton.element,
        '두 번째 숫자 증가 감소 버튼들: '
      );

      //+, -, /, * 연산자별 식 생성
      this.plusExpression = new Expression({
        oper: '+',
        firstNumber: this.calcModel.getFirstNumber(),
        secondNumber: this.calcModel.getSecondNumber(),
        result: this.calcController.add(),
      });
      this.minusExpression = new Expression({
        oper: '-',
        firstNumber: this.calcModel.getFirstNumber(),
        secondNumber: this.calcModel.getSecondNumber(),
        result: this.calcController.add(),
      });
      this.multiExpression = new Expression({
        oper: '*',
        firstNumber: this.calcModel.getFirstNumber(),
        secondNumber: this.calcModel.getSecondNumber(),
        result: 1this.calcController.add(),
      });
      this.diviExpression = new Expression({
        oper: '/',
        firstNumber: this.calcModel.getFirstNumber(),
        secondNumber: this.calcModel.getSecondNumber(),
        result: this.calcController.add(),
      });

      //렌더링 해주기
      this.render();
    }

    makeButtonGroup(
      plusBtn: HTMLElement,
      minusBtn: HTMLElement,
      text: string
    ): HTMLElement {
      const div = document.createElement('div');
      const content = document.createTextNode(text);
      div.append(content);
      div.append(plusBtn);
      div.append(minusBtn);
      div.setAttribute('class', 'calc-board__button-group');
      return div;
    }

    clickHandler(oper: '+' | '-', button: 'first' | 'second') {
      if (button === 'first') {
        if (oper === '+') {
          this.calcController.increaseFirstNumber();
        } else {
          this.calcController.decreaseFirstNumber();
        }
      }

      if (button === 'second') {
        if (oper === '+') {
          this.calcController.increaseSecondNumber();
        } else {
          this.calcController.decreaseSecondNumber();
        }
      }
      console.log(this.calcModel);
    }

    render() {
      this.root.append(this.firstButtonGroup);
      this.root.append(this.secondButtonGroup);
      this.root.append(this.plusExpression.element);
      this.root.append(this.minusExpression.element);
      this.root.append(this.multiExpression.element);
      this.root.append(this.diviExpression.element);
    }
  }
}
