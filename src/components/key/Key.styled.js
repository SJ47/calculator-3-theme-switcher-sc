import styled from "styled-components";

export const StyledKey = styled.div`
    cursor: pointer;
    // Set background colour for key
    background: ${(props) =>
        props.keyValue === "="
            ?
            props.theme.colors.keyBg2
            :
            props.keyValue === "RESET" || props.keyValue === "DEL"
                ?
                props.theme.colors.keyBg1
                :
                props.theme.colors.keyBg3

    };

    // Set text colour for key
    color: ${(props) =>
        props.keyValue === "RESET" || props.keyValue === "DEL"
            ?
            props.theme.colors.textDelResetKey
            :
            props.keyValue === "="
                ?
                props.theme.colors.textEqualKey
                :
                props.theme.colors.textKey
    };

    // Set font size for key
    font-size: ${(props) =>
        props.keyValue === "=" || props.keyValue === "RESET" || props.keyValue === "DEL"
            ?
            "20px"
            :
            "var(--fs-numbers)"
    };

    // Set padding size for text in special keys
    padding-top: ${(props) =>
        props.keyValue === "=" || props.keyValue === "RESET" || props.keyValue === "DEL"
            ?
            "1.3em"
            :
            ".65em"
    };

    // Set shadow colour for key
    border-bottom: 4px solid ${(props) =>
        props.keyValue === "="
            ?
            props.theme.colors.keyShadow2
            :
            props.keyValue === "RESET" || props.keyValue === "DEL"
                ?
                props.theme.colors.keyShadow1
                :
                props.theme.colors.keyShadow3
    };

    &:active {
        border-bottom: 0;
    }
    
    border-radius: var(--radius-corner-small);
    grid-area: ${(props) => props.span && "5 / span 2"};
`;