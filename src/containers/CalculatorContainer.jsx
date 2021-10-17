import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/Header";
import { StyledContainer } from "./CalculatorContainer.styled";

const darkTheme = {
    colors: {
        bgMain: "var(--color-dt-main-bg)",
        bgToggle: "var(--color-dt-toggle-bg)",
        bgScreen: "var(--color-dt-screen-bg)",
        keyBg1: "var(--color-dt-key-bg-1)",
        keyShadow1: "var(--color-dt-shadow-bg-1)",
        keyBg2: "var(--color-dt-key-bg-2)",
        keyShadow2: "var(--color-dt-shadow-bg-2)",
        keyBg3: "var(--color-dt-key-bg-3)",
        keyShadow3: "var(--color-dt-shadow-bg-3)",
        text1: "var(--color-dt-text-1)",
        text2: "var(--color-dt-text-2)",
    },
    mobile: "768px",
};

const lightTheme = {
    colors: {
        bgMain: "var(--color-lt-main-bg)",
        bgToggle: "var(--color-lt-toggle-bg)",
        bgScreen: "var(--color-lt-screen-bg)",
        keyBg1: "var(--color-lt-key-bg-1)",
        keyShadow1: "var(--color-lt-shadow-bg-1)",
        keyBg2: "var(--color-lt-key-bg-2)",
        keyShadow2: "var(--color-lt-shadow-bg-2)",
        keyBg3: "var(--color-lt-key-bg-3)",
        keyShadow3: "var(--color-lt-shadow-bg-3)",
        text1: "var(--color-lt-text-1)",
        text2: "var(--color-lt-text-2)",
    },
    mobile: "768px",
};

const purpleTheme = {
    colors: {
        bgMain: "var(--color-purple-main-bg)",
        bgToggle: "var(--color-purple-toggle-bg)",
        bgScreen: "var(--color-purple-screen-bg)",
        keyBg1: "var(--color-purple-key-bg-1)",
        keyShadow1: "var(--color-purple-shadow-bg-1)",
        keyBg2: "var(--color-purple-key-bg-2)",
        keyShadow2: "var(--color-purple-shadow-bg-2)",
        keyBg3: "var(--color-purple-key-bg-3)",
        keyShadow3: "var(--color-lt-shadow-bg-3)",
        text1: "var(--color-purple-text-1)",
        text2: "var(--color-purple-text-2)",
        text3: "var(--color-purple-text-3)",
    },
    mobile: "768px",
};

const CalculatorContainer = () => {
    const [theme, setTheme] = useState(darkTheme);

    const handleThemeSwitch = () => {
        // setTheme(
        //     theme === darkTheme
        //         ? lightTheme
        //         : theme === lightTheme
        //         ? purpleTheme
        //         : darkTheme
        // );
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledContainer>
                <Header handleThemeSwitch={handleThemeSwitch} />
                <div>REST OF PAGE</div>
            </StyledContainer>
        </ThemeProvider>
    );
};

export default CalculatorContainer;
