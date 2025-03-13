'use client';

import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 36px;
    font-weight: semi-bold;
    line-height: 48px;
    letter-spacing: auto;
    margin: 0;
`;
export const H2 = styled.h1`
    font-size: 28px;
    font-weight: semi-bold;
    line-height: 48px;
    letter-spacing: auto;
    margin: 0;
`;

export const H3 = styled.h1`
    font-size: 24px;
    font-weight: semi-bold;
    line-height: 40px;
    letter-spacing: auto;
    margin: 0;
`;

export const H4 = styled.h1`
    font-size: 18px;
    font-weight: semi-bold;
    line-height: 24px;
    letter-spacing: auto;
    margin: 0;
`;

export const H5 = styled.h1`
    font-size: 20px;
    font-weight: semi-bold;
    line-height: 32px;
    letter-spacing: auto;
    margin: 0;
`;

export const BodyText = styled.p<{
    $type:
        | 'Regular16'
        | 'Regular18'
        | 'Regular20'
        | 'Medium16'
        | 'Medium18'
        | 'Medium20'
        | 'Bold16'
        | 'Bold18'
        | 'Bold20';
}>`
    font-size: ${({ $type: type }) =>
        ({
            Regular16: '16px',
            Regular18: '18px',
            Regular20: '20px',
            Medium16: '16px',
            Medium18: '18px',
            Medium20: '20px',
            Bold16: '16px',
            Bold18: '18px',
            Bold20: '20px',
        }[type])};
    font-weight: ${({ $type: type }) =>
        ({
            Regular16: '400',
            Regular18: '400',
            Regular20: '400',
            Medium16: '500',
            Medium18: '500',
            Medium20: '500',
            Bold16: '700',
            Bold18: '700',
            Bold20: '700',
        }[type])};
    line-height: 24px;
    letter-spacing: auto;
    font-family: 'dm-sans', sans-serif;
    margin: 0;
`;

export const Caption = styled.p<{
    $type: 'Regular14' | 'Medium14' | 'Bold14';
}>`
    font-size: 14px;
    font-weight: ${({ $type: type }) =>
        ({
            Regular14: '400',
            Medium14: '500',
            Bold14: '700',
        }[type])};
    line-height: 24px;
    letter-spacing: auto;
    font-family: 'dm-sans', sans-serif;
    margin: 0;
`;
