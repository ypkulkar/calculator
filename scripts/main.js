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

// const tmpButton = document.querySelector("#clear-button");
// tmpButton.addEventListener("click",function(){
//     const display = document.querySelector("#display-text");
    
// })

let display_text = "" // This is where the equation is going to be stored

const allBtns = document.querySelectorAll(".btn")
allBtns.forEach(btn => {
    const text = btn.textContent;
    btn.addEventListener("click",function(){
        const display = document.querySelector("#display-text");
        if(btn.id === "clear-button"){
            display_text = "";
            display.textContent= "";
        }
        else{
        display_text += text;
        display.textContent= display_text;
        }
    })
    
})
