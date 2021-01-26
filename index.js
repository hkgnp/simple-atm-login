setup = () => {
  let display = document.querySelector('#display');
  let message = document.querySelector('#message');

  display.innerHTML = '&nbsp';

  let displayNumber = '';
  chgDisplay = (number) => {
    displayNumber = displayNumber + number;
    display.innerHTML = displayNumber;
    if (displayNumber.length == 7) {
      displayNumber = displayNumber.slice(0, -1);
      display.innerHTML = displayNumber;
      message.innerHTML = 'You cannot enter more than 6 numbers.';
    }
  };

  resetDisplay = () => {
    displayNumber = '&nbsp';
    display.innerHTML = displayNumber;
    message.innerHTML = 'Welcome to Hua Yang Bank.';
  };

  deleteNumber = () => {
    displayNumber = displayNumber.slice(0, -1);
    display.innerHTML = displayNumber;
  };

  enterNumber = () => {
    if (displayNumber.length < 6) {
      message.innerHTML = 'You need to key in at least 6 numbers.';
    } else if (displayNumber.length == 6) {
      message.innerHTML = 'You are successfully logged in.';
    }
  };
  // call setup function
  // make sure this is the very last line
};
setup();
