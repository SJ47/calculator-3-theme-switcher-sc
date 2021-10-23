import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/Header";
import Keypad from "../components/keypad/Keypad";
import Result from "../components/result/Result";
import { StyledContainer } from "./CalculatorContainer.styled";
import { darkTheme, lightTheme, purpleTheme } from "./MyThemes";
import {
    handleDelKeyPressed,
    handleResetKeyPressed,
    handleNumberKeyPressed,
    handlePeriodKeyPressed,
    calculateNumbers,
} from "../utils/KeyPressFunctions";
import { calculateResult } from "../utils/Calculations";
import { StyledResult } from "../components/result/Result.styled";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const CalculatorContainer = () => {
    const [theme, setTheme] = useState(
        darkModeQuery.matches ? darkTheme : lightTheme
    );
    const [currentInput, setCurrentInput] = useState("");
    const [runningTotal, setRunningTotal] = useState(0);
    const [calcStack, setCalcStack] = useState([]);

    // calculator functions
    const handleButtonClick = (buttonValue) => {
        if (buttonValue >= 0 && buttonValue <= 9) {
            setCurrentInput(handleNumberKeyPressed(currentInput, buttonValue));
        } else if (buttonValue === "DEL" || buttonValue === "Backspace") {
            if (
                currentInput &&
                setCurrentInput(handleDelKeyPressed(currentInput, runningTotal))
            );
        } else if (buttonValue === "RESET") {
            setCurrentInput(handleResetKeyPressed());
            setOperator(null);
            setPreOperatorNumber(0);
        } else if (buttonValue === ".") {
            setCurrentInput(handlePeriodKeyPressed(currentInput));

            // ADD NUMBERS
        } else if (
            buttonValue === "+" ||
            buttonValue === "-" ||
            buttonValue === "x" ||
            buttonValue === "/" ||
            buttonValue === "="
        ) {
            // keep history at last 5 operators only
            console.log("BUTTON: ", buttonValue);
            let tempCalcStack = calcStack;
            if (calcStack.length >= 5) {
                tempCalcStack = calcStack.slice(0, 4);
            }
            setCalcStack([buttonValue, ...tempCalcStack]);

            const result = calculateNumbers(
                currentInput,
                runningTotal,
                buttonValue,
                calcStack
            );
            if (result || result === 0) {
                setRunningTotal(result);
                setCurrentInput("");
            }
        }
    };

    // useEffect(() => {
    //     // Keep stack limited to last 10 entries only
    //     console.log("Calcstack prev operator: ", calcStack.length);
    // }, [calcStack]);

    const handleKeyPress = (keyValue) => {
        handleButtonClick(keyValue);
    };

    // Theme
    const handleThemeSwitch = () => {
        setTheme(
            theme === darkTheme
                ? lightTheme
                : theme === lightTheme
                ? purpleTheme
                : darkTheme
        );
    };

    useEffect(() => {
        darkModeQuery.addEventListener("change", (event) => {
            setTheme(event.matches ? darkTheme : lightTheme);
        });
    });

    return (
        <ThemeProvider theme={theme}>
            <StyledContainer>
                <Header handleThemeSwitch={handleThemeSwitch} />
                <Result
                    currentInput={currentInput}
                    runningTotal={runningTotal}
                    handleKeyPress={handleKeyPress}
                />
                <Keypad
                    handleButtonClick={handleButtonClick}
                    handleKeyPress={handleKeyPress}
                />
            </StyledContainer>
        </ThemeProvider>
    );
};

export default CalculatorContainer;
