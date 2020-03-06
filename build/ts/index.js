// @ts-check
import { Calculator } from './Calculator.js';
import { Controls } from './Controls.js';
import { Display } from './Display.js';
main();
function main() {
    const outputElement = document.getElementById('display');
    const display = new Display(outputElement);
    const calculator = new Calculator(display);
    const buttons = document.querySelectorAll('div.buttons>button');
    new Controls(calculator, buttons);
}
// Оператор (операторная функция) new создает экземпляр объекта, 
// встроенного или определенного пользователем, имеющего конструктор.
//# sourceMappingURL=index.js.map