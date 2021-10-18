import styled from "styled-components";

export const StyledResult = styled.div`
    background: ${(props) => props.theme.colors.bgScreen};
    color: ${(props => props.theme.colors.text1)};
    border-radius: var(--radius-corner-small);
    text-align: right;
    font-size: var(--fs-numbers);
    padding: 1.2em 0.7em;
    margin: .5em .5em;
`;