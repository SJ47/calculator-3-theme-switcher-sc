function removeCommas(num) {
    return num.replace(/,/g, '');
}

// RESET key pressed
export const handleResetKeyPressed = () => {
    return "0";
}

// DEL key pressed
export const handleDelKeyPressed = (currentInput, runningTotal) => {
    // !currentInput && runningTotal;
    const updatedResult = currentInput.slice(0, currentInput.length - 1)
    const updatedResultCommasRemoved = parseFloat(removeCommas(updatedResult));
    return updatedResult ? updatedResultCommasRemoved.toLocaleString() : "0";
}

// Number key pressed
export const handleNumberKeyPressed = (currentInput, buttonValue) => {
    if (currentInput.includes(".")) {
        return currentInput + buttonValue;   // If there is a decimal point already no need to worry about commas
    } else {
        const resultCommasRemoved = parseFloat(removeCommas(currentInput) + buttonValue);
        return resultCommasRemoved.toLocaleString();
    }
}

// Period . key pressed - add period unless result already has a period in the number
export const handlePeriodKeyPressed = (currentInput) => {
    return currentInput.includes(".") ? currentInput : currentInput + ".";
}

// Add two numbers
export const calculateNumbers = (currentInput, runningTotal, buttonValue, calcStack) => {

    if (currentInput === "") return null;
    // if (calcStack.length === 0 || calcStack.length === 1) return null;

    const currentInputCommasRemoved = removeCommas(currentInput);
    const currentOperator = calcStack.length < 1 ? buttonValue : calcStack[0]
    console.log("Calcstack length: ", calcStack.length);
    // const currentOperator = buttonValue;

    console.log(currentOperator)
    let result;
    switch (currentOperator) {
        case "+" || "=":
            console.log(currentOperator)
            result = runningTotal + parseFloat(currentInputCommasRemoved);
            break;
        case "-" || "=":
            result = runningTotal - parseFloat(currentInputCommasRemoved);
            // if (result >= 0) {
            // result = Math.abs(result);
            // }
            break;
        case "x" || "=":
            result = runningTotal * parseFloat(currentInputCommasRemoved);
            break;
        case "/" || "=":
            result = runningTotal / parseFloat(currentInputCommasRemoved);
            break;
        default:
            result = runningTotal
            break;
    }
    // const result = runningTotal + parseFloat(currentInputCommasRemoved);
    // console.log("REsult", result)
    return result;
}


// Add two numbers
// export const addNumbers = (currentInput, runningTotal, operator) => {

//     if (currentInput === "") return null;

//     const currentInputCommasRemoved = removeCommas(currentInput);
//     const result = runningTotal + parseFloat(currentInputCommasRemoved);
//     return result;
// }

// Subtract two numbers
// export const subtractNumbers = (currentInput, runningTotal, operator) => {

//     if (currentInput === "") return null;

//     const currentInputCommasRemoved = removeCommas(currentInput);
//     console.log("running total: ", runningTotal);
//     const result = runningTotal - parseFloat(currentInputCommasRemoved);
//     console.log("Result: ", result)
//     return result;
// }


// export const calculateTwoNumbers = (currentInput, runningTotal, operator) => {
//     const currentInputCommasRemoved = removeCommas(currentInput);

//     let result = 0;
//     switch (operator) {
//         case "+":
//             result = runningTotal + parseFloat(currentInputCommasRemoved);
//             break;
//         case "-":
//             result = runningTotal - parseFloat(currentInputCommasRemoved);
//             break;
//         // case "x":
//         //     result = runningTotal * parseFloat(currentInputCommasRemoved);
//         //     break;
//         default:
//             break;
//     }
//     // return parseFloat(currentInputCommasRemoved) + runningTotal;
//     return result;
// }