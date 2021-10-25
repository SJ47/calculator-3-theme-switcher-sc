import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/Header";
import Keypad from "../components/keypad/Keypad";
import Result from "../components/result/Result";
import { StyledContainer } from "./CalculatorContainer.styled";
import { darkTheme, lightTheme, purpleTheme } from "./MyThemes";
import {
    handleDelKeyPressed,
    handleNumberKeyPressed,
    handlePeriodKeyPressed,
    calculateNumbers,
} from "../utils/KeyPressFunctions";

const CalculatorContainer = () => {
    const [theme, setTheme] = useState(lightTheme);
    const [currentInput, setCurrentInput] = useState("");
    const [runningTotal, setRunningTotal] = useState(0);
    const [calcStack, setCalcStack] = useState([]);

    // calculator functions
    const handleButtonClick = (buttonValue) => {
        if (buttonValue >= 0 && buttonValue <= 9 && calcStack[0] !== "=") {
            setCurrentInput(handleNumberKeyPressed(currentInput, buttonValue));
        } else if (buttonValue === "DEL" || buttonValue === "Backspace") {
            if (
                currentInput &&
                setCurrentInput(handleDelKeyPressed(currentInput, runningTotal))
            );
        } else if (buttonValue === "RESET") {
            setCurrentInput("");
            setRunningTotal(0);
            setCalcStack([]);
        } else if (buttonValue === "." && calcStack[0] !== "=") {
            setCurrentInput(handlePeriodKeyPressed(currentInput));
        } else if (
            buttonValue === "+" ||
            buttonValue === "-" ||
            buttonValue === "x" ||
            buttonValue === "/" ||
            buttonValue === "="
        ) {
            // keep history of last 5 operators only
            const tempCalcStack = calcStack.slice(0, 4);
            setCalcStack([buttonValue, ...tempCalcStack]);

            // Perform calculation of numbers
            const result = calculateNumbers(
                currentInput,
                runningTotal,
                buttonValue,
                calcStack
            );
            if (result || result === 0) {
                if (buttonValue === "-" && calcStack.length === 0) {
                    setRunningTotal(Math.abs(result));
                } else {
                    setRunningTotal(result);
                }
                setCurrentInput("");
            }
        }
    };

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

    // Check for existing calc theme saved in browser.  If not found, default to system user preferred theme
    useEffect(() => {
        if (localStorage.calcTheme === "darkTheme") {
            setTheme(darkTheme);
        } else if (localStorage.calcTheme === "lightTheme") {
            setTheme(lightTheme);
        } else if (localStorage.calcTheme === "purpleTheme") {
            setTheme(purpleTheme);
        } else {
            // No existing calculator theme exists, so default to user preferred system theme
            const darkModeQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            setTheme(darkModeQuery.matches ? darkTheme : lightTheme);
        }
    }, []);

    // Any time theme changes, write the theme value to localstorage
    useEffect(() => {
        localStorage.setItem("calcTheme", theme.name);
    }, [theme]);

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
