import styled from "styled-components";

export const StyledSwitch = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "theme numbers"
        "theme ball";

    .theme-text {
        grid-area: theme;
        /* background: orange; */
        align-self: end;
        justify-self: end;
        margin-right: .5em;
        
    }

    .numbers {
        /* background: orange; */
        grid-area: numbers;
        display: flex;
        padding: 0 1em;
        justify-content: space-around;
        align-items: center;

        div:nth-child(1),div:nth-child(2),div:nth-child(3) {
            /* background: orange; */
            padding: 0 .4em;
        }
    }

    /* The switch - the box around the slider */
    .switch {
        grid-area: ball;
        position: relative;
        display: inline-block;
        width: 80%;
        height: 20px;
        /* background: orange; */
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
        top: 10px;
        left: 10px;
        right: -10px;
        bottom: -10px;
        /* background-color: #ccc; */
        background: ${(props) => props.theme.colors.bgToggle};
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 10px;
        bottom: 3.5px;
        background-color: red;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background: ${(props) => props.theme.colors.bgToggle};
        /* background: linear-gradient(
            to right,
            hsl(210, 78%, 56%),
            hsl(146, 68%, 55%)
        ); */
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(-19px);
        -ms-transform: translateX(-19px);
        transform: translateX(-19px);
    }

    input:checked + .slider:before {
        background-color: red;
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    /* .ball-container {
        grid-area: ball;
        display: flex;
        width: 50%;
        background: ${(props) => props.theme.colors.bgToggle};
        border-radius: 25px;
        padding: 0 3em;
        justify-self: center;
        cursor: pointer;
    } */

    /* .ball:nth-child(1) {
        position: relative;
        left: -40px;
    }

    .ball:nth-child(2) {
        position: relative;
        left: -40px;
        display: none;
    }

    .ball:nth-child(3) {
        position: relative;
        left: -40px;
        display: none;
    } */
`;

/* div { */
/* background: orange;
display: flex;
flex-direction: column;
padding-left: 1em;
background: pink; */

/* div:first-of-type { */
/* display: flex;
flex-direction: row;
justify-content: left;
padding-bottom: .1em;
background: pink; */

/* div:first-of-type {
    background: pink;
    padding-left: .25em;
} */
/* } */


/* span { */
/* background: pink; */
/* padding-left: 1em; */
/* border-radius: var(--radius-25);
padding: .25em 1.25em;
cursor: pointer; */
/* color: green; */
/* content: "\1F534"; */
/* } */
/* } */
// `;