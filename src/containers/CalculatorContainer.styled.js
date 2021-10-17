import styled from "styled-components";

export const StyledContainer = styled.div`
    background: ${(props => props.theme.colors.bgMain)};
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .1fr 1fr;
    padding-top: .3em;
    padding: 0 .5em;
`;