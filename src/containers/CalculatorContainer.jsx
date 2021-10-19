import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/Header";
import Keypad from "../components/keypad/Keypad";
import Result from "../components/result/Result";
import { StyledContainer } from "./CalculatorContainer.styled";
import { darkTheme, lightTheme, purpleTheme } from "./MyThemes";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const handleKeyPress = (event) => {
    console.log("Mouse click event: ", event.target.innerText);
};

const CalculatorContainer = () => {
    const [theme, setTheme] = useState(
        darkModeQuery.matches ? darkTheme : lightTheme
    );

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
                <Result />
                <Keypad handleKeyPress={handleKeyPress} />
            </StyledContainer>
        </ThemeProvider>
    );
};

export default CalculatorContainer;
