'use client';
import { tabs } from '@/utils/tabs';
import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const navigateBack = () => {
        router.back();
    };
    return (
        pathname !== '' && (
            <HeaderContainer>
                <div>
                    {!tabs.some((tab) => pathname === tab.page) && (
                        <BackButton onClick={navigateBack}>
                            <ArrowLeft />
                        </BackButton>
                    )}
                </div>
            </HeaderContainer>
        )
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    padding: 8px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
`;

const BackButton = styled.button`
    background-color: transparent;
    border: none;
`;
