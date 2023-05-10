export default class Expression {
    constructor({ oper, firstNumber, secondNumber, result }) {
        const div = document.createElement('div');
        div.setAttribute('class', 'calc-board__expression');
        div.innerHTML = `
			<p>${firstNumber}</p>
			<p>${oper}</p>
			<p>${secondNumber}</p>
			<p>=</p>
			<p>${result}</p>
		`;
        this.element = div;
    }
}
