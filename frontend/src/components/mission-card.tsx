import React from 'react';
import { BodyText, H4 } from './text';
import styled from 'styled-components';

export default function MissionCard() {
    return (
        <MissionCardContainer>
            <MissionImage></MissionImage>
            <H4>Titre de la mission</H4>
            <BodyText $type="Regular16">Nom de l&apos;association</BodyText>
        </MissionCardContainer>
    );
}

const MissionCardContainer = styled.article`
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    width: 70%;
`;

const MissionImage = styled.div`
    background-image: url('/images/activity.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 16px;
`;
