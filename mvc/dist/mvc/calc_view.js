import { CALC as calc } from './calc_model.js';
import { CALC as calc2 } from './calc_controller.js';
import Expression from './components/Expression.js';
import Button from './components/Button.js';
export var CALC;
(function (CALC) {
    var mvc;
    (function (mvc) {
        var CalcModel = calc.mvc.CalcModel;
        var CalcController = calc2.mvc.CalcController;
        class CalcView {
            constructor(root) {
                this.root = root;
                this.calcModel = new CalcModel();
                this.calcController = new CalcController(this.calcModel, this);
                //버튼 컴포넌트 생성
                const firstIncreaseButton = new Button('+', this.clickHandler.bind(this, '+', 'first'));
                const firstDecreaseButton = new Button('-', this.clickHandler.bind(this, '-', 'first'));
                const secondIncreaseButton = new Button('+', this.clickHandler.bind(this, '+', 'second'));
                const secondDecreaseButton = new Button('-', this.clickHandler.bind(this, '-', 'second'));
                //버튼 그룹 컴포넌트에 장착해주기
                this.firstButtonGroup = this.makeButtonGroup(firstIncreaseButton.element, firstDecreaseButton.element, '첫 번째 숫자 증가 감소 버튼들: ');
                this.secondButtonGroup = this.makeButtonGroup(secondIncreaseButton.element, secondDecreaseButton.element, '두 번째 숫자 증가 감소 버튼들: ');
                // 모델 뷰 데이터 동기화
                this.synchronizeModelAndView();
                //렌더링 해주기
                this.render();
            }
            makeButtonGroup(plusBtn, minusBtn, text) {
                const div = document.createElement('div');
                const content = document.createTextNode(text);
                div.append(content);
                div.append(plusBtn);
                div.append(minusBtn);
                div.setAttribute('class', 'calc-board__button-group');
                return div;
            }
            clickHandler(oper, button) {
                if (button === 'first') {
                    if (oper === '+') {
                        this.calcController.increaseFirstNumber();
                    }
                    else {
                        this.calcController.decreaseFirstNumber();
                    }
                }
                if (button === 'second') {
                    if (oper === '+') {
                        this.calcController.increaseSecondNumber();
                    }
                    else {
                        this.calcController.decreaseSecondNumber();
                    }
                }
                console.log(this.calcModel);
            }
            synchronizeModelAndView() {
                if (this.plusExpression) {
                    this.root.removeChild(this.plusExpression.element);
                    this.root.removeChild(this.minusExpression.element);
                    this.root.removeChild(this.multiExpression.element);
                    this.root.removeChild(this.diviExpression.element);
                }
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
                    result: this.calcController.substract(),
                });
                this.multiExpression = new Expression({
                    oper: '*',
                    firstNumber: this.calcModel.getFirstNumber(),
                    secondNumber: this.calcModel.getSecondNumber(),
                    result: this.calcController.multiply(),
                });
                this.diviExpression = new Expression({
                    oper: '/',
                    firstNumber: this.calcModel.getFirstNumber(),
                    secondNumber: this.calcModel.getSecondNumber(),
                    result: this.calcController.divide(),
                });
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
        mvc.CalcView = CalcView;
    })(mvc = CALC.mvc || (CALC.mvc = {}));
})(CALC || (CALC = {}));
