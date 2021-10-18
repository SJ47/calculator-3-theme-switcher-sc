import styled from "styled-components";

export const StyledKeypadContainer = styled.div`
    background: ${(props) => props.theme.colors.bgToggle};
    color: ${(props => props.theme.colors.text1)};
    border-radius: var(--radius-corner-small);
    /* text-align: right; */
    font-size: var(--fs-numbers);
    padding: 1.2em 0.7em;
    margin: .5em .5em;
    height: 100%;

    display: grid;
    grid-template-columns: 75px 75px 75px 75px;
    grid-template-rows: 75px 75px 75px 75px 75px;
    gap: .7em;
    text-align: center;

    /* grid-template-areas:
        "7 8 9 DEL"; */
`;