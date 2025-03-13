'use client';

import colors from '@/utils/colors';
import styled from 'styled-components';

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'cta',
})<{ cta: boolean }>`
    background-color: ${({ cta }) =>
        cta ? colors.primary.blue : 'transparent'};
    padding: 8px 16px;
    border: ${({ cta }) => (cta ? 'none' : `3px solid ${colors.primary.blue}`)};
    border-radius: 8px;
    color: ${({ cta }) => (cta ? 'white' : colors.primary.blue)};
    font-weight: bold;
`;
