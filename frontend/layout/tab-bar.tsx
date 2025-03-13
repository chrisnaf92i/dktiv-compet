'use client';
import { GoalIcon, HomeIcon, UserIcon } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';
import colors from '../src/utils/colors';
import { usePathname, useRouter } from 'next/navigation';

export default function TabBar() {
    const router = useRouter();
    const pathname = usePathname();
    const tabs = [
        {
            title: 'Acceuil',
            page: '/',
            icon: HomeIcon,
        },
        {
            title: 'Mission',
            page: '/mission',
            icon: GoalIcon,
        },
        {
            title: 'Profil',
            page: '/profile',
            icon: UserIcon,
        },
    ];
    return (
        <TabBarContainer>
            {tabs.map((tab, i) => {
                const Icon = tab.icon;
                return (
                    <TabButton
                        $selected={tab.page == pathname}
                        onClick={() => {
                            router.push(tab.page);
                        }}
                        key={i}
                    >
                        <Icon
                            size={24}
                            color={
                                tab.page == pathname
                                    ? colors.base.black
                                    : 'white'
                            }
                        />
                    </TabButton>
                );
            })}
        </TabBarContainer>
    );
}

const TabBarContainer = styled.nav`
    position: fixed;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: ${colors.base.black};
    width: 80%;
    padding: 8px;
    border-radius: 44px;
    display: flex;
    justify-content: space-evenly;
`;

const TabButton = styled.button<{ $selected: boolean }>`
    padding: 12px;
    border-radius: 100%;
    background-color: ${({ $selected: selected }) =>
        selected ? colors.primary.yellow : 'transparent'};
    border: none;
    outline: none;
`;
