import styled from "styled-components";

export const StyledKey = styled.div`
    background: ${(props) => props.theme.colors.keyBg3};
    color: ${(props) => props.theme.colors.text2};
    font-size: var(--fs-numbers);
    border-radius: var(--radius-5);
    padding-top: .7em;
    grid-area: ${(props) => props.span && "5 / span 2"};

`;