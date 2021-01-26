# simple-atm-login

This is the solution for a repl.it test. 

### Question:
You are given the mock UI for an ATM

Write a JavaScript program that enables the ATM to work.

Inside index.js, write a setup function

1. Set the <span> within div#display to blank (hint: just use an empty string)
2. When the user presses any button, show it in the display. It should work like how a normal ATM works --that is, if the user presses 1 and then 2, the display should show "12"
3. The display can take up to 6 digits only
4. The reset button will remove all the digits entered so far.

Challenges
1. The DEL button will remove the last enter digit. Write in the code for that
2. If the user tries to enter more than 6 digits, display an error message at the bottom of the ATM
3. Add in an ENTER button. If the user keys in less than 6 digits, display an error message at the bottom of the ATM.
