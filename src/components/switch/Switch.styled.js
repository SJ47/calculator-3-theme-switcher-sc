import styled from "styled-components";

export const StyledSwitch = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "theme numbers"
        "theme switch";

    .theme-text {
        grid-area: theme;
        align-self: end;
        justify-self: end;
        margin-right: 1em;
        
    }

    .numbers {
        grid-area: numbers;
        display: flex;
        padding: 0 1em;
        justify-content: space-around;
        align-items: center;

        div:nth-child(1),div:nth-child(2),div:nth-child(3) {
            padding: 0 .4em;
        }
    }

    /* The switch - the box around the slider */
    .switch {
        grid-area: switch;
        position: relative;
        display: inline-block;
        width: 78%;
        height: 25px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
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
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 3.6px;
        background: ${(props) => props.theme.colors.keyBg2};
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    /* input:checked + .slider {
        background: ${(props) => props.theme.colors.bgToggle};
    } */

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input + .slider:before {
        -webkit-transform: translateX(${(props) => props.theme.translateX});
        -ms-transform: translateX(${(props) => props.theme.translateX});
        transform: translateX(${(props) => props.theme.translateX});
    }

    input:checked + .slider:before {
        background: ${(props) => props.theme.colors.keyBg2};
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
