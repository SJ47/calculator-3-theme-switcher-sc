import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {

        /* Layout sizes  */
        --layout-mobile: 375px;
        --layout-desktop: 1440px;

        /* Fonts  */
        --ff-primary: 'Spartan', sans-serif;
        --fs-numbers: 32px;
        --fw-bold: 700;

        // Theme 1 - dark
        --color-dt-main-bg: hsl(222, 26%, 31%);
        --color-dt-toggle-bg: hsl(223, 31%, 20%);
        --color-dt-screen-bg: hsl(224, 36%, 15%);

        --color-dt-key-bg-1: hsl(225, 21%, 49%);
        --color-dt-key-shadow-1: hsl(224, 28%, 35%);
        --color-dt-key-bg-2: hsl(6, 63%, 50%);
        --color-dt-key-shadow-2: hsl(6, 70%, 34%);
        --color-dt-key-bg-3: hsl(30, 25%, 89%);
        --color-dt-key-shadow-3: hsl(28, 16%, 65%);

        --color-dt-text-1: hsl(221, 14%, 31%);
        --color-dt-text-2: hsl(0, 0%, 100%);

        // Theme 2 - light
        --color-lt-main-bg: hsl(0, 0%, 90%);
        --color-lt-toggle-bg: hsl(0, 5%, 81%);
        --color-lt-screen-bg: hsl(0, 0%, 93%);

        --color-lt-key-bg-1: hsl(185, 42%, 37%);
        --color-lt-key-shadow-1: hsl(185, 58%, 25%);
        --color-lt-key-bg-2: hsl(25, 98%, 40%);
        --color-lt-key-shadow-2: hsl(25, 99%, 27%);
        --color-lt-key-bg-3: hsl(45, 7%, 89%);
        --color-lt-key-shadow-3: hsl(35, 11%, 61%);

        --color-lt-text-1: hsl(60, 10%, 19%);
        --color-lt-text-2: hsl(0, 0%, 100%);

        // Theme 3 - purple
        --color-purple-main-bg: hsl(268, 75%, 9%);
        --color-purple-toggle-bg: hsl(268, 71%, 12%);
        --color-purple-screen-bg: hsl(268, 71%, 12%);

        --color-purple-key-bg-1: hsl(281, 89%, 26%);
        --color-purple-key-shadow-1: hsl(285, 91%, 52%);
        --color-purple-key-bg-2: hsl(176, 100%, 44%);
        --color-purple-key-shadow-2: hsl(177, 92%, 70%);
        --color-purple-key-bg-3: hsl(268, 47%, 21%);
        --color-purple-key-shadow-3: hsl(290, 70%, 36%);

        --color-purple-text-1: hsl(52, 100%, 62%);
        --color-purple-text-3: hsl(198, 20%, 13%);
        --color-purple-text-2: hsl(0, 0%, 100%);

        /* Shapes  */
        --radius-25: 25px;
        --radius-corner-small: 3.6px;
    }

    body {
        margin: 0;
        padding: 0;
        /* background: #2b2a33; */
        @media (min-width: 776px) {
            background: orange;
            /* display: flex;
            justify-content: center;
            align-items: center;
            height: 95vh; */
        }
    }

    #root {
        background: var(--color-light-grayish-cyan);
        min-width: var(--layout-mobile);
        margin: 0 auto;
        font-family: var(--ff-primary);
        width: 376px;
        padding-top: 0;
        /* border: 1px solid grey;
        height: 100vh; */
        @media (min-width: 776px) {
            /* background: orange; */
            /* width: 900px;
            max-width: 1440px; */
        }
    }
`;

export default GlobalStyles;

