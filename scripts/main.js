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
        const text = btn.textContent;
        
        if(btn.id === "clear-button"){
            display_text = "";
            display.textContent= "0";
        }
        else if(btn.classList.contains("num")){
            display_text += String(text);
            console.log(typeof(display_text));
            display.textContent = display_text;
        }
        else if(btn.classList.contains("op")){
            operand1 = display_text;
            display_text = "";
            display.textContent = "0";
            opChosen = btn.textContent;
        }
        else if(btn.classList.contains("eq")){
            operand2 = display_text;
            //console.log(`op = ${opChosen}`);
            //console.log(`operand1 = ${operand1}`)
            
            //result = operate(+operand1,+operand2,String(opChosen));
            result = +operand1 + (+operand2);
            //console.log(result);

        }
        else{
            
            console.log("here");
        }
    })
    
})
