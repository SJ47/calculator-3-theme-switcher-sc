import styled from "styled-components";

export const StyledResult = styled.div`
    background: ${(props) => props.theme.colors.bgScreen};
    color: ${(props => props.theme.colors.textResult)};
    border-radius: var(--radius-corner-small);
    text-align: right;
    font-size: var(--fs-numbers);
    padding: 1em 0.7em;
    margin: 1em .5em .5em .5em;
`;