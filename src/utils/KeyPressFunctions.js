// DEL key pressed
export const handleDelKeyPressed = (result) => {
    const newResult = result.slice(0, result.length - 1);
    return newResult ? newResult : "0";
}

// RESET key pressed
export const handleResetKeyPressed = () => {
    return "0";
}

// Number key pressed
export const handleNumberKeyPressed = (result, buttonValue) => {
    const pattern = /\d/;
    if (pattern.test(buttonValue)) {
        return result !== "0" ? result + buttonValue : buttonValue
    } else {
        return "0";
    }
}