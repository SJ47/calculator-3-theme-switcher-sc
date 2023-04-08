import React from "react";
import Switch from "../switch/Switch";
import { StyledHeader, StyledLogo, StyledSwitchContainer } from "./Header.styled";

const Header = ({ handleThemeSwitch }) => {
    return (
        <StyledHeader>
            <StyledLogo>calculator</StyledLogo>
            <StyledSwitchContainer>
                <Switch handleThemeSwitch={handleThemeSwitch} />
            </StyledSwitchContainer>
        </StyledHeader>
    );
};

export default Header;
