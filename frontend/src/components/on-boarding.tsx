'use client';
import React from 'react';
import { Button } from './button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

export default function OnBoarding() {
    const router = useRouter();
    const navigateToLogin = () => {
        router.push('/auth/login');
    };
    return (
        <OnBoardingContainer>
            <Logo src="/logo.svg" alt="Logo" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                ullam cum saepe delectus voluptate placeat temporibus sed.
            </p>
            <Button
                onClick={navigateToLogin}
                style={{ margin: '4px', width: '75%' }}
                cta={true}
            >
                Se connecter - client
            </Button>
            <Button cta={false} style={{ margin: '4px', width: '75%' }}>
                Se connecter - presta
            </Button>

            <EmptyButton>Continuer sans se connecter</EmptyButton>
        </OnBoardingContainer>
    );
}

const Logo = styled.img`
    width: 60%;
`;

const OnBoardingContainer = styled.section`
    box-shadow: 0 4px 6px black;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 16px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const EmptyButton = styled.button`
    border: none;
    outline: none;
`;
