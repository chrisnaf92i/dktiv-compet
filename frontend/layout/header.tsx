'use client';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return <HeaderContainer>header</HeaderContainer>;
}

const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 8px;
`;
