type OperType = '+' | '-' | '*' | '/';

type PropsType = {
  oper: OperType;
  firstNumber: number;
  secondNumber: number;
  result: number;
};

export default class Expression {
  element: HTMLElement;

  constructor({ oper, firstNumber, secondNumber, result }: PropsType) {
    const div = document.createElement('div');
    div.setAttribute('class', '123');
    div.innerHTML = `
			<p>${firstNumber}</p>
			<p>${oper}</p>
			<p>${secondNumber}</p>
			<p>${result}</p>
		`;
    this.element = div;
  }
}