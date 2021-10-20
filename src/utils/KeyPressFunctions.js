function removeCommas(num) {
    return num.replace(/,/g, '');
}

// RESET key pressed
export const handleResetKeyPressed = () => {
    return "0";
}

// DEL key pressed
export const handleDelKeyPressed = (result) => {
    const updatedResult = result.slice(0, result.length - 1)
    const updatedResultCommasRemoved = parseFloat(removeCommas(updatedResult));
    return updatedResult ? updatedResultCommasRemoved.toLocaleString() : "0";
}

// Number key pressed
export const handleNumberKeyPressed = (result, buttonValue) => {
    if (result.includes(".")) {
        return result + buttonValue;   // If there is a decimal point already no need to worry about commas
    } else {
        const resultCommasRemoved = parseFloat(removeCommas(result) + buttonValue);
        return resultCommasRemoved.toLocaleString();
    }
}

// Period . key pressed - add period unless result already has a period in the number
export const handlePeriodKeyPressed = (result) => {
    return result.includes(".") ? result : result + ".";
}