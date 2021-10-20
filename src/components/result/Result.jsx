import React from "react";
import { StyledResult } from "./Result.styled";

const Result = ({ result, handleKeyPress }) => {
    return (
        <>
            <StyledResult
                type="text"
                value={result}
                onKeyDownCapture={(event) => handleKeyPress(event.key)}
                readOnly
            ></StyledResult>
        </>
    );
};

export default Result;
