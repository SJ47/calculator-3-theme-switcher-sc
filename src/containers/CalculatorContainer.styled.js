import styled from "styled-components";

export const StyledContainer = styled.div`
    background: ${(props => props.theme.colors.bgMain)};
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .1fr .1fr .8fr;
    padding: 1em .5em;
`;