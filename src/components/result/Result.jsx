import React from "react";
import { StyledResult } from "./Result.styled";

const Result = ({ currentInput, runningTotal, handleKeyPress }) => {
    return (
        <>
            <StyledResult
                type="text"
                value={currentInput}
                placeholder={runningTotal}
                onKeyDownCapture={(event) => handleKeyPress(event.key)}
                readOnly
                autoFocus
            ></StyledResult>
        </>
    );
};

export default Result;
