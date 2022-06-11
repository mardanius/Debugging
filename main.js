
/*-------
Debugging
---------

Debugging is the process of going through your code, finding any issues, and fixing them.

Issues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your 
code has unexpected behavior, or logical errors where your code doesn't do what you intended.

In this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.
---------------------------------------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------
1. Use the JavaScript Console to Check the Value of a Variable
--------------------------------------------------------------

Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, 
or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most 
helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. 
It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the 
status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print the string Hello world! to the console:

console.log('Hello world!');

---------------------------------------------------------------------------------------------
Use the console.log() method to print the value of the variable a where noted in the code. */

let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);




/*---------------------------------------------------------------------------
2. Understanding the Differences between the freeCodeCamp and Browser Console
-----------------------------------------------------------------------------

You may have noticed that some freeCodeCamp challenges include their own console. This console behaves a little differently 
than the browser console.

There are many methods to use with console to output messages. log, warn, and clear to name a few. The freeCodeCamp console 
will only output log messages, while the browser console will output all messages. When you make changes to your code, it will 
automatically run and show the logs. The freeCodeCamp console is then cleared each time your code runs.

First, open your browser console so you can see the logs. To do that, you can right-click the freeCodeCamp navigation bar at 
the top and click inspect on most browsers. Then find the console tab in the window that opens.

After that, use console.log to log the output variable. View the two consoles to see the log. Finally, use console.clear after 
your log to clear the browser console. View the difference in the two consoles. */

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();




/*-------------------------------------------
3. Use typeof to Check the Type of a Variable
---------------------------------------------

You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with 
multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. 
Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external 
data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
In order, the console will display the strings string, number, object, and object.

JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), 
and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically 
a type of object.

--------------------------------------------------------------------------------------------------------------
Add two console.log() statements to check the typeof each of the two variables seven and three in the code. */

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line

console.log(typeof seven);
console.log(typeof three);




/*-----
Catch Misspelled Variable and Function Names
The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.

Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.

Fix the two spelling errors in the code so the netWorkingCapital calculation works. */

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);




/*---
Catch Unclosed Parentheses, Brackets, Braces and Quotes
Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.

Fix the two pair errors in the code.*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);




/*---
Catch Mixed Usage of Single and Double Quotes
JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
The first two are correct, but the third is incorrect.

Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string. */
