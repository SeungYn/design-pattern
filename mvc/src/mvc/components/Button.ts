export default class Button {
  element: HTMLElement;

  constructor(text: string, listener: () => void) {
    const button = document.createElement('button');
    button.innerText = text;
    button.setAttribute('button', 'class');
    button.addEventListener('click', () => listener());
    this.element = button;
  }
}
