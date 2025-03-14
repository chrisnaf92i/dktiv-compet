'use client';
import React, { useState } from 'react';
import { Button } from './button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { BodyText, H1 } from './text';
import colors from '@/utils/colors';
import { useSwipeable } from 'react-swipeable';
import OrSeparator from './or-separator';
type OnBoardingProps = {
    setPhoto: (photo: string) => void;
};

export default function OnBoarding({ setPhoto }: OnBoardingProps) {
    const [onBoardingStep, setOnBoardingStep] = useState<
        'intro' | 'Step 1' | 'Step 2' | 'Step 3'
    >('intro');
    const router = useRouter();
    const onChangeStep = () => {
        if (onBoardingStep === 'intro') {
            setOnBoardingStep('Step 1');
            setPhoto('/images/onboarding/onboarding-1.webp');
        } else if (onBoardingStep === 'Step 1') {
            setOnBoardingStep('Step 2');
            setPhoto('/images/onboarding/onboarding-2.webp');
        } else if (onBoardingStep === 'Step 2') {
            setOnBoardingStep('Step 3');
            setPhoto('/images/onboarding/onboarding-3.webp');
        } else {
            router.push('/auth/signin');
        }
    };

    const swipeHandler = useSwipeable({
        onSwipedLeft: () => {
            if (onBoardingStep === 'Step 1') {
                setOnBoardingStep('Step 2');
                setPhoto('/images/onboarding/onboarding-2.webp');
            } else if (onBoardingStep === 'Step 2') {
                setOnBoardingStep('Step 3');
                setPhoto('/images/onboarding/onboarding-3.webp');
            }
        },
        onSwipedRight: () => {
            if (onBoardingStep === 'Step 1') {
                setOnBoardingStep('intro');
                setPhoto('');
            } else if (onBoardingStep === 'Step 2') {
                setOnBoardingStep('Step 1');
                setPhoto('/images/onboarding/onboarding-1.webp');
            } else if (onBoardingStep === 'Step 3') {
                setOnBoardingStep('Step 2');
                setPhoto('/images/onboarding/onboarding-2.webp');
            }
        },
        trackMouse: true,
        preventScrollOnSwipe: true,
    });
    return (
        {
            intro: (
                <OnBoardingContainer>
                    <H1 style={{ color: colors.base.white, margin: '6px 0' }}>
                        Bienvenue sur DKTIV !
                    </H1>
                    <BodyText
                        style={{ color: colors.base.white, margin: '6px 0' }}
                        $type="Regular16"
                    >
                        Transformez chaque pas en une action solidaire et
                        redonnez vie à votre quartier.
                    </BodyText>

                    <Button
                        $enabled={true}
                        type="primary"
                        style={{ margin: '8px 0' }}
                        onClick={onChangeStep}
                    >
                        Commencer
                    </Button>

                    <OrSeparator
                        lineColor={colors.base.white}
                        textColor={colors.base.white}
                    />

                    <Button
                        $enabled={true}
                        type="secondary"
                        style={{ margin: '8px 0' }}
                    >
                        Devenir prestataire
                    </Button>
                </OnBoardingContainer>
            ),
            'Step 1': (
                <OnBoardingContainer {...swipeHandler}>
                    <H1 style={{ color: colors.base.white, margin: '6px' }}>
                        Chaque pas compte
                    </H1>
                    <BodyText
                        $type="Regular16"
                        style={{ color: colors.base.white, margin: '6px' }}
                    >
                        Avec D-KTIV, transformez vos déplacements en actions
                        solidaires.
                    </BodyText>

                    <OnBoardingStepsContainer>
                        <OnBoardingSteps $active />
                        <OnBoardingSteps />
                        <OnBoardingSteps />
                    </OnBoardingStepsContainer>
                </OnBoardingContainer>
            ),
            'Step 2': (
                <OnBoardingContainer {...swipeHandler}>
                    <H1 style={{ color: colors.base.white, margin: '6px' }}>
                        Agissez pour le collectif
                    </H1>
                    <BodyText
                        $type="Regular16"
                        style={{ color: colors.base.white, margin: '6px' }}
                    >
                        Créez des liens et soutenez des initiatives locales qui
                        font la différence.
                    </BodyText>
                    <OnBoardingStepsContainer>
                        <OnBoardingSteps />
                        <OnBoardingSteps $active />
                        <OnBoardingSteps />
                    </OnBoardingStepsContainer>
                </OnBoardingContainer>
            ),
            'Step 3': (
                <OnBoardingContainer {...swipeHandler}>
                    <H1 style={{ color: colors.base.white, margin: '6px 0' }}>
                        Rejoignez le mouvement
                    </H1>
                    <BodyText
                        $type="Regular16"
                        style={{ color: colors.base.white, margin: '6px 0' }}
                    >
                        Commencez à marcher et faites partie d&apos;un mouvement
                        engagé, pas à pas !
                    </BodyText>
                    <OnBoardingFooter>
                        <OnBoardingStepsContainer>
                            <OnBoardingSteps />
                            <OnBoardingSteps />
                            <OnBoardingSteps $active />
                        </OnBoardingStepsContainer>
                        <Button
                            $enabled={true}
                            style={{ width: '50%' }}
                            type="primary"
                            onClick={onChangeStep}
                        >
                            Terminer
                        </Button>
                    </OnBoardingFooter>
                </OnBoardingContainer>
            ),
        }[onBoardingStep] || null
    );
}

const OnBoardingContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: absolute;
    bottom: 0;
`;

const OnBoardingStepsContainer = styled.div`
    display: flex;
    gap: 8px;
    margin: 16px 0;
`;

const OnBoardingSteps = styled.div<{ $active?: boolean }>`
    width: 40px;
    height: 0;
    border: 3px solid
        ${({ $active: active }) =>
            active ? colors.primary.yellow : colors.base.white};
`;
const OnBoardingFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
`;
