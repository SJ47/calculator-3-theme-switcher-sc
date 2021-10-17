import React from "react";
import { StyledSwitch } from "./Switch.styled";

const Switch = ({ handleThemeSwitch }) => {
    return (
        <StyledSwitch>
            <div className="theme-text">THEME</div>

            <div className="numbers">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            <label className="switch">
                <input onClick={handleThemeSwitch} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </StyledSwitch>
    );
};

export default Switch;
