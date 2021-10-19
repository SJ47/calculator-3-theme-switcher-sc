import styled from "styled-components";

export const StyledKeypadContainer = styled.div`
    background: ${(props) => props.theme.colors.bgToggle};
    color: ${(props => props.theme.colors.text1)};
    border-radius: var(--radius-corner-small);
    font-size: var(--fs-numbers);
    margin: .4em .5em 0 .5em;
    padding: 1em .7em .4em .7em;
    display: grid;
    grid-template-columns: 75px 75px 75px 75px;
    grid-template-rows: 75px 75px 75px 75px 75px;
    gap: .5em;
    text-align: center;

    @media (min-width: 776px) {
        width: 520px;
        grid-column-gap: .8em;
        grid-row-gap: 0em;
        grid-template-columns: 1fr 1fr 1fr 1fr;

    }
`;