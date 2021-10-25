function removeCommas(num) {
    return num.replace(/,/g, '');
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

// Perform calculation on two numbers based on operator value
export const calculateNumbers = (currentInput, runningTotal, buttonValue, calcStack) => {

    if (currentInput === "") return null;

    const currentInputCommasRemoved = removeCommas(currentInput);
    const currentOperator = calcStack.length < 1 ? buttonValue : calcStack[0]

    let result;
    switch (currentOperator) {
        case "+" || "=":
            console.log(currentOperator)
            result = runningTotal + parseFloat(currentInputCommasRemoved);
            break;
        case "-" || "=":
            result = runningTotal - parseFloat(currentInputCommasRemoved);
            break;
        case "x" || "=":
            if (calcStack.length === 0) {
                runningTotal = 1;
            }
            result = runningTotal * parseFloat(currentInputCommasRemoved);
            break;
        case "/" || "=":
            if (calcStack.length === 0) {
                result = currentInput;
                break;
            }
            result = runningTotal / parseFloat(currentInputCommasRemoved);
            break;
        default:
            result = runningTotal
            break;
    }
    return result;
}