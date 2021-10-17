import React from "react";
import {
    StyledSwitch,
    StyledThemeText,
    StyledThemeNumbers,
    StyledSwitchLabel,
    StyledSwitchInput,
    StyledSlider,
} from "./Switch.styled";

const Switch = ({ handleThemeSwitch }) => {
    return (
        <StyledSwitch>
            <StyledThemeText>THEME</StyledThemeText>

            <StyledThemeNumbers>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </StyledThemeNumbers>

            <StyledSwitchLabel>
                <StyledSwitchInput onClick={handleThemeSwitch} type="checkbox" />
                <StyledSlider />
            </StyledSwitchLabel>
        </StyledSwitch>
    );
};

export default Switch;
