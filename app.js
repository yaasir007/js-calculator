let calculator = document.querySelector('.calculator');
let display = document.querySelector('.display');
let keys = document.querySelectorAll('.keys');

keys.forEach(key => {
  key.addEventListener('click', (e) => {
    const key = e.target;
    const action = key.dataset.action;

    switch (action) {
      case 'backspace':
        if (display.textContent) {
          display.textContent = display.textContent.slice(0, -1);
        }
        break;

      case 'clear':
        display.textContent = '';
        break;

      case 'equal':
        try {
          display.textContent = eval(display.textContent);
        } catch (error) {
          display.textContent = 'Error';
        }
        break;

      default:
        display.textContent += key.textContent;
        break;
    }
  })
});
