import { CALC as calc } from './calc_model.js';
import { CALC as calc2 } from './calc_controller.js';
import Expression from './components/Expression.js';
import Button from './components/Button.js';

export namespace CALC.mvc {
  let PADDING = 30;
  let COLUMN_WIDTH = 60;
  let ROW_HEIGHT = 24;
  let BUTTON_SIZE = 24;

  import CalcModel = calc.mvc.CalcModel;
  import CalcController = calc2.mvc.CalcController;

  export class CalcView {
    plusExpression: Expression;
    diviExpression: Expression;
    multiExpression: Expression;
    minusExpression: Expression;
    firstButtonGroup: HTMLElement;
    secondButtonGroup: HTMLElement;
    constructor(private root: HTMLElement) {
      //버튼 컴포넌트 생성
      const firstIncreaseButton = new Button('+', () => {
        console.log('firstIncreaseButton');
      });
      const firstDecreaseButton = new Button('-', () => {
        console.log('firstDecreaseButton');
      });

      const secondIncreaseButton = new Button('+', () => {
        console.log('secondIncreaseButton');
      });
      const secondDecreaseButton = new Button('-', () => {
        console.log('secondDecreaseButton');
      });

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
        firstNumber: 5,
        secondNumber: 2,
        result: 7,
      });
      this.minusExpression = new Expression({
        oper: '-',
        firstNumber: 5,
        secondNumber: 2,
        result: 3,
      });
      this.multiExpression = new Expression({
        oper: '*',
        firstNumber: 5,
        secondNumber: 2,
        result: 10,
      });
      this.diviExpression = new Expression({
        oper: '/',
        firstNumber: 5,
        secondNumber: 2,
        result: 2,
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
      div.setAttribute('calc-board__button-group', 'class');
      return div;
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
