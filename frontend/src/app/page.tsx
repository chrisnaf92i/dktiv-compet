'use client';
// import OnBoarding from '@/components/on-boarding';
// import colors from '@/utils/colors';
// import { useState } from 'react';
// import styled from 'styled-components';

import { InputText } from '@/components/input';
import MissionCard from '@/components/mission-card';
import { H1, H3 } from '@/components/text';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
    // const [background, setBackground] = useState<string>('');
    // const initialOnboardingValue =
    //     sessionStorage.getItem('connected') != 'dont-want';
    // const [showOnBoarding, setShowOnboarding] = useState<boolean>(true);
    // return showOnBoarding ? (
    // const onSetPhoto = (photo: string) => {
    //     setBackground(photo);
    // };
    // return (
    //     <Main $background={background}>
    //         {background == '' && (
    //             <BackgroundPattern src="/images/abstract/logo_background.svg" />
    //         )}
    //         <OnBoarding setPhoto={onSetPhoto} />
    //     </Main>
    // );
    // ) : (
    //     <main> Page d&apos;acceuil</main>
    // );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [missions, setMissions] = useState<any[]>([]);
    useEffect(() => {
        fetch('http://localhost:4000/api/mission')
            .then((res) => res.json())
            .then((data) => setMissions(data.missions));
    }, []);

    return (
        <main style={{ padding: '16px 0' }}>
            <H1>Salut Sophie !</H1>
            <InputText placeholder="🔍 Une mission en particulier ?" />

            <SuggestionContainer>
                <SugestionHeader>
                    <H3>Suggées pour toi</H3>

                    <MoreLink href="/mission">plus</MoreLink>
                </SugestionHeader>

                <CardContainer>
                    {missions.map((mission) => (
                        <MissionCard key={mission.id} />
                    ))}
                </CardContainer>
            </SuggestionContainer>
        </main>
    );
}

const SuggestionContainer = styled.section`
    width: 100%;
`;

const CardContainer = styled.div`
    width: 100%; /* Largeur fixe */
    height: 200px; /* Hauteur fixe */
`;

const SugestionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MoreLink = styled(Link)`
    font-size: 16px;
    text-decoration: underline;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    color: grey;
`;

// const Main = styled.main<{ $background: string }>`
//     background: ${colors.base.black}
//         url(${({ $background: background }) => background}) no-repeat center
//         center;
//     background-size: cover;
//     width: 100vw;
//     height: 100vh;
// `;

// const BackgroundPattern = styled.img`
//     position: absolute;
//     top: 8px;
//     right: 0px;
//     object-fit: cover;
// `;
