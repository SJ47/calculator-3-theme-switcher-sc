import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props => props.theme.colors.text1)};
    margin: 0 1em;
`;

export const StyledLogo = styled.div`
    font-size: var(--fs-numbers);
`;

export const StyledSwitchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    /* font-size: .5rem; */
    letter-spacing: .1rem;
`;