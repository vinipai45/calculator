const numbers=document.querySelectorAll(".number");
const calculator_screen=document.querySelector(".calculator_screen");
const operators=document.querySelectorAll(".operator");
const equalSign=document.querySelector(".equal_sign");
const clearBtn=document.querySelector(".all_clear");

let prevInput="0";
let currentInput="0";
let calculationOperator='';

const inputNumber=(number)=>{
    if(currentInput==="0"){
        console.log(currentInput);
        currentInput=number;

    } else{
        console.log("entered else");
        currentInput+=number;
    }
    return currentInput;
}

const inputOperator=(operator)=>{
    prevInput=currentInput;
    calculationOperator=operator;
    currentInput="0";
}

// UPDATE THE SCREEN
const update_screen= (number)=>{
    calculator_screen.value=number;
}

//CLEAR THE SCREEN
const clearAll=()=>{
    prevInput='0';
    calculationOperator='';
    currentInput='0';
}


clearBtn.addEventListener("click",(event)=>{
    clearAll();
    update_screen(currentInput);
    // console.log("AC is pressed");
})


numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
          inputNumber(event.target.value);
          update_screen(currentInput);
    })  
  });

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        console.log(event.target.value);
        inputOperator(event.target.value);
    })
});

equalSign.addEventListener("click",()=>{
    calculate();
    update_screen(currentInput);
})


// CALCULATE FUNCTION
const calculate=()=>{
    let result=0;
    switch(calculationOperator){
        case '+':   result = parseInt(prevInput) + parseInt(currentInput);
                    break;
        case '-':   result = parseInt(prevInput) - parseInt(currentInput);
                    break;
        case '*':   result = parseInt(prevInput) * parseInt(currentInput);
                    break;
        case '/':   result = parseInt(prevInput) / parseInt(currentInput);
                    break;
        default: return;
    }

    currentInput=result.toString();
    calculationOperator='';
}




