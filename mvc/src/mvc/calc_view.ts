import { CALC as calc } from './calc_model';
import { CALC as calc2 } from './calc_controller';
import { CALC as calc3 } from '../struct/rectangle';

export namespace CALC.mvc {
  let PADDING = 30;
  let COLUMN_WIDTH = 60;
  let ROW_HEIGHT = 24;
  let BUTTON_SIZE = 24;

  import CalcModel = calc.mvc.CalcModel;
  import CalcController = calc2.mvc.CalcController;
  import Rectangle = calc3.struct.Rectangle;

  export class CalcView {
    constructor(private root: HTMLElement) {}
  }
}
