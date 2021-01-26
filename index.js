// You are given the mock UI for an ATM

// Write a JavaScript program that enables the ATM to work.

// Inside index.js, write a setup function

// 1. Set the <span> within div#display to blank (hint: just use an empty string)
// 2. When the user presses any button, show it in the display. It should work like how a normal ATM works --that is, if the user presses 1 and then 2, the display should show "12"
// 3. The display can take up to 6 digits only
// 4. The reset button will remove all the digits entered so far.

// Challenges
// 1. The DEL button will remove the last enter digit. Write in the code for that
// 2. If the user tries to enter more than 6 digits, display an error message at the bottom of the ATM
// 3. Add in an ENTER button. If the user keys in less than 6 digits, display an error message at the bottom of the ATM.

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
