import styled from "styled-components";

export const StyledSwitch = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "theme numbers"
        "theme switch";
`;

export const StyledThemeText = styled.div`
    grid-area: theme;
    align-self: end;
    justify-self: end;
    margin-right: 1em;
`;

export const StyledThemeNumbers = styled.div`
    grid-area: numbers;
    display: flex;
    padding: 0 1em;
    justify-content: space-around;
    align-items: center;

    div {
        padding: 0 .4em;
    }
`;

/* The switch - the box around the slider */
export const StyledSwitchLabel = styled.label`
    grid-area: switch;
    position: relative;
    display: inline-block;
    width: 78%;
    height: 25px;
`;

export const StyledSwitchInput = styled.input`
    /* Hide default HTML checkbox */
    opacity: 0;
    width: 0;
    height: 0;
`;

export const StyledSlider = styled.span`
 /* The slider */
        position: absolute;
        cursor: pointer;
        top: 2px;
        left: 10px;
        right: -10px;
        bottom: -2px;
        background: ${(props) => props.theme.colors.bgToggle};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border: none;
        border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 3.6px;
        background: ${(props) => props.theme.colors.keyBg2};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        -webkit-transform: translateX(${(props) => props.theme.translateX});
        -ms-transform: translateX(${(props) => props.theme.translateX});
        transform: translateX(${(props) => props.theme.translateX});
        border-radius: 50%;
    }
`;
