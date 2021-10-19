import React from "react";
import { StyledResult } from "./Result.styled";

const Result = ({ result }) => {
    return (
        <>
            {/* <StyledResult>{result}</StyledResult> */}
            <StyledResult type="number" value={result} disabled></StyledResult>
        </>
    );
};

export default Result;
