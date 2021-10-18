import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/Header";
import Keypad from "../components/keypad/Keypad";
import Result from "../components/result/Result";
import { StyledContainer } from "./CalculatorContainer.styled";
import { darkTheme, lightTheme, purpleTheme } from "./MyThemes";

const handleKeyPress = () => {
    console.log("Key pressed down");
};

const CalculatorContainer = () => {
    const [theme, setTheme] = useState(darkTheme);

    const handleThemeSwitch = () => {
        setTheme(
            theme === darkTheme
                ? lightTheme
                : theme === lightTheme
                ? purpleTheme
                : darkTheme
        );
    };

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
