export namespace CALC.mvc {
  export class CalcModel {
    private firstNumber = 100;
    private secondNumber = 10;

    constructor() {}

    getFirstNumber() {
      return this.firstNumber;
    }

    getSecondNumber() {
      return this.secondNumber;
    }

    setFirstNumber(firstNumber: number): void {
      this.firstNumber = firstNumber;
    }

    setSecondNumber(secondNumber: number) {
      this.secondNumber = secondNumber;
    }

    decreaseFirstNumber() {
      this.firstNumber -= 1;
    }

    decreaseSecondNumber() {
      this.secondNumber -= 1;
    }

    increaseFirstNumber() {
      this.firstNumber += 1;
    }

    increaseSecondNumber() {
      this.secondNumber += 1;
    }
  }
}
