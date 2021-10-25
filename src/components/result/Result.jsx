import React from "react";
import { StyledResult } from "./Result.styled";

const Result = ({ currentInput, runningTotal, handleKeyPress }) => {
    const formattedRunningTotal = runningTotal.toLocaleString();

    return (
        <>
            <StyledResult
                type="text"
                value={currentInput}
                placeholder={formattedRunningTotal}
                onKeyDownCapture={(event) => handleKeyPress(event.key)}
                readOnly
                autoFocus
            ></StyledResult>
        </>
    );
};

export default Result;
