# Calculator
Calculator Project The Odin Project


functions for all of the basic math operators you typically find on calculators.

function for the following items

// operators
// --------add +
// --------subtract -
// --------multiply *
// --------divide /

operation will consist of a number, an operator, and another number. 
example, 3 + 5. 
a operator b
three variables, one for each part of the operation. 
use these variables to update your display later.

function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

basic HTML calculator with buttons for each digit and operator (including =).

a display for the calculator. 
function that populate the display when you click the digit buttons.
store the content of the display (the number) in a variable for use in the next step.

a “clear” button. clear()

// Make the calculator work! 

store the first and second numbers input by the user and 
operate() on them when the user presses the = button, according to the operator that was selected between the numbers.

code that can populate the display 
once operate has been called, update the display with the result of the operation.

figure out how to store all the values and call the operate function with them.

Errors
Gotchas: watch out for and fix these bugs if they show up in your code:
should not evaluate more than a single pair of numbers at a time. 

enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). 

first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). 

use that result (19) as the first number in a new calculation, along with the next operator (-). 

round answers with long decimals so that they don’t overflow the display.

Pressing =(operate()) before entering all of the numbers or an operator could cause problems!

Pressing “clear”(clearDisplay()) should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.

Display error message if the user tries to divide by 0… and don’t let it crash your calculator!

Extra credit

Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. 

Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
 
Add a “backspace” button, so the user can undo their last input if they click the wrong number.

Add keyboard support! 



