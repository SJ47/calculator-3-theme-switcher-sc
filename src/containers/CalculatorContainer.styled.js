import styled from "styled-components";

export const StyledContainer = styled.div`
    background: ${(props => props.theme.colors.bgMain)};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .1fr .1fr .8fr;
    padding: 3em .5em 2em .5em;

`;
