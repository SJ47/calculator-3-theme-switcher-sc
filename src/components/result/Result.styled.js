import styled from "styled-components";

export const StyledResult = styled.input`
    width: 95%;
    background: ${(props) => props.theme.colors.bgScreen};
    color: ${(props => props.theme.colors.textResult)};
    border-radius: var(--radius-corner-small);
    text-align: right;
    font-size: var(--fs-numbers);
    font-family: var(--ff-primary);
    font-weight: var(--fw-bold);
    padding: 1em 0.7em;
    margin: 1em .5em .5em .5em;
    border: 0;

    @media (min-width: 776px) {
        margin-bottom: .3em;
        margin-top: .9em;
        padding-right: 1em;
    }
`;
