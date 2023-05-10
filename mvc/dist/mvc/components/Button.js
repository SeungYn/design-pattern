export default class Button {
    constructor(text, listener) {
        const button = document.createElement('button');
        button.innerText = text;
        button.setAttribute('button', 'class');
        button.addEventListener('click', () => listener());
        this.element = button;
    }
}
