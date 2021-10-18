import React from "react";
import { StyledKey } from "../key/Key.styled";
import { StyledKeypadContainer } from "./Keypad.styled";

const Keypad = ({ handleKeyPress }) => {
    const keypadKeys = [
        {
            id: "7",
            value: "7",
        },
        {
            id: "8",
            value: "8",
        },
        {
            id: "9",
            value: "9",
        },
        {
            id: "DEL",
            value: "DEL",
        },
        {
            id: "4",
            value: "4",
        },
        {
            id: "5",
            value: "5",
        },
        {
            id: "6",
            value: "6",
        },
        {
            id: "+",
            value: "+",
        },
        {
            id: "1",
            value: "1",
        },
        {
            id: "2",
            value: "2",
        },
        {
            id: "3",
            value: "3",
        },
        {
            id: "-",
            value: "-",
        },
        {
            id: ".",
            value: ".",
        },
        {
            id: "0",
            value: "0",
        },
        {
            id: "/",
            value: "/",
        },
        {
            id: "x",
            value: "x",
        },
        {
            id: "RESET",
            value: "RESET",
            span: 2,
        },
        {
            id: "=",
            value: "=",
            span: 2,
        },
    ];

    const styledKeypadKeys = keypadKeys.map((keypadKey) => {
        return (
            <StyledKey
                onMouseDown={handleKeyPress}
                key={keypadKey.id}
                keyValue={keypadKey.value}
                span={keypadKey.span}
            >
                {keypadKey.value}
            </StyledKey>
        );
    });

    return (
        <>
            <StyledKeypadContainer>{styledKeypadKeys}</StyledKeypadContainer>
        </>
    );
};

export default Keypad;
