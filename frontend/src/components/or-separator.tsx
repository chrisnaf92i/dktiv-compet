import React from 'react';
import styled from 'styled-components';
import { BodyText } from './text';

type OrSeparatorProps = {
    lineColor: string;
    textColor: string;
    margin?: string;
};

export default function OrSeparator({
    lineColor,
    textColor,
    margin,
}: OrSeparatorProps) {
    return (
        <SeparatorContainer margin={margin}>
            <SeparatorLine color={lineColor} />
            <SeparatorWord color={textColor} $type="Medium16">
                Ou
            </SeparatorWord>
            <SeparatorLine color={lineColor} />
        </SeparatorContainer>
    );
}

const SeparatorContainer = styled.div<{ margin?: string }>`
    display: flex;
    align-items: center;
    margin: ${({ margin }) => (margin ? margin : 0)};
    gap: 12px;
`;
const SeparatorLine = styled.div<{ color: string }>`
    flex: 1;
    border: 1px solid ${({ color }) => color};
`;

const SeparatorWord = styled(BodyText)<{ color: string }>`
    color: ${({ color }) => color};
    margin: 0;
`;
