'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
//Declared variable a. Initialized value y to the variable a.
let a = 'y';

//Declared variable b. Initialized value x to the variable b.
let b = 'x';

//Declared variable t. Initialized value empty string to the variable a.
let t = '';

//Read varaiable a, b, t. Output yx
console.log(a, b, t);

//Reasigned variable t with the value of the variable a.
t = a;

//Reasigned variable a with the value of the variable b.
a = b;

//Reasigned variable b with the value of the variable .
b = t;

console.log(a, b, t);
//Read varaiable a, b, t. Output x y


// what did you do in this program?
// what are the final values of `a` and `b`?
// how are they changed from the initial values

// is it possible to swap a and b without using t?
