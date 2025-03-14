'use client';
import OnBoarding from '@/components/on-boarding';
import colors from '@/utils/colors';
import { useState } from 'react';
import styled from 'styled-components';
// import Cookies from 'js-cookie';

export default function Home() {
    const [background, setBackground] = useState<string>('');
    // const initialOnboardingValue =
    //     sessionStorage.getItem('connected') != 'dont-want';
    // const [showOnBoarding, setShowOnboarding] = useState<boolean>(true);

    // return showOnBoarding ? (

    const onSetPhoto = (photo: string) => {
        setBackground(photo);
    };

    return localStorage.getItem('isConnected') == 'true' ? (
        <main> Page d&apos;acceuil</main>
    ) : (
        <Main $background={background}>
            {background == '' && (
                <BackgroundPattern src="/images/abstract/logo_background.svg" />
            )}
            <OnBoarding setPhoto={onSetPhoto} />
        </Main>
    );
}

const Main = styled.main<{ $background: string }>`
    background: ${colors.base.black}
        url(${({ $background: background }) => background}) no-repeat center
        center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

const BackgroundPattern = styled.img`
    max-width: 100%;
    position: absolute;
    top: 8px;
    right: 0px;
    object-fit: cover;
`;
