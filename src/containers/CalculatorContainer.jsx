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
} from "../utils/KeyPressFunctions";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const CalculatorContainer = () => {
    const [theme, setTheme] = useState(
        darkModeQuery.matches ? darkTheme : lightTheme
    );
    const [inputNumber, setInputNumber] = useState(0);
    const [operator, setOperator] = useState(null);
    const [preOperatorNumber, setPreOperatorNumber] = useState(0);
    const [postOperatorNnumber, setPostOperatorNnumber] = useState(0);
    const [result, setResult] = useState("0");

    // calculator functions
    const handleButtonClick = (buttonValue) => {
        if (buttonValue >= 0 && buttonValue <= 9) {
            setResult(handleNumberKeyPressed(result, buttonValue));
        } else if (buttonValue === "DEL") {
            setResult(handleDelKeyPressed(result));
        } else if (buttonValue === "RESET") {
            setResult(handleResetKeyPressed());
        }
        // console.log(result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
                <Result result={result} />
                <Keypad handleButtonClick={handleButtonClick} />
            </StyledContainer>
        </ThemeProvider>
    );
};

export default CalculatorContainer;
