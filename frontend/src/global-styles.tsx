'use client';
import { createGlobalStyle } from 'styled-components';
import colors from './utils/colors';

const GlobalStyles = createGlobalStyle`
    body: {
        background-color: ${colors.base.white}
    }
    h1, h2, h3, h4 {
        font-family: 'Sora', sans-serif;
    }
`;
export default GlobalStyles;
