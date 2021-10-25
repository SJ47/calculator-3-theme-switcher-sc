import React from "react";
import { StyledResult } from "./Result.styled";

const Result = ({ currentInput, runningTotal, handleKeyPress }) => {
    const formattedRunningTotal = runningTotal.toLocaleString(undefined, {
        maximumFractionDigits: 20,
    });

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
