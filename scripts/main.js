// Basic math functions: add, subtract, multiply and divide
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

// Applies given operator on two numbers (a: add, s: subtract m: multiply, d: divide)
function operate(a,b,o){
    switch(o){
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        default:
            console.log("There is an error in operate()");
    }
}


let display_text = ""; // This is where the equation is going to be stored
let operand1 = "";
let operand2 = "";
let opChosen = "";
let result = 0;

const allBtns = document.querySelectorAll(".btn")
allBtns.forEach(btn => {
    
    btn.addEventListener("click",function(){
        const display = document.querySelector("#display-text");
        const text = btn.textContent.trim();
        
        if(btn.id === "clear-button"){
            display_text = "";
            display.textContent= "0";
        }
        else if(btn.classList.contains("num")){
            display.textContent = display_text;
            display_text += text;
            display.textContent = display_text;
        }
        else if(btn.classList.contains("op")){
            operand1 = display_text;
            display_text = "";
            display.textContent = "0";
            opChosen = btn.textContent.trim();
        }
        else if(btn.classList.contains("eq")){
            operand2 = display_text;
            result = operate(+operand1,+operand2,String(opChosen));
            display.textContent = result;
            display_text = "";
            operand1 = "";
            operand2 = "";

        }
        else{
            
            console.log("here");
        }
    })
    
})
