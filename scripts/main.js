// Basic math functions: add, subtract, multiply and divide
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

// Applies given operator on two numbers (a: add, s: subtract m: multiply, d: divide)
function operate(a,b,o){
    switch(o){
        case "a":
            return add(a,b);
            break;
        case "s":
            return subtract(a,b);
            break;
        case "m":
            return multiply(a,b);
            break;
        case "d":
            return divide(a,b);
            break;
        default:
            console.log("There is an error in operate()");
    }
}