const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    switch (event.target.value) {
      case 'AC':
        display.value = '0';
      case 'C':
        display.value = display.value.slice(0, -1); 
        break;
      case '=':
        try {
          const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
          display.value = eval(expression); 
        } catch (error) {
          display.value = 'Error';
        }
        break;
      default:
        display.value += event.target.value;
    }
  });
});
