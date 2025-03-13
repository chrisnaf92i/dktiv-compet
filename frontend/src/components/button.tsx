/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import colors from '@/utils/colors';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'cta',
})<{ cta: boolean }>`
    background-color: ${({ cta }) =>
        cta ? colors.primary.blue : 'transparent'};
    padding: 8px 16px;
    border: ${({ cta }) => (cta ? 'none' : `3px solid ${colors.primary.blue}`)};
    border-radius: 8px;
    color: ${({ cta }) => (cta ? 'white' : colors.primary.blue)};
    font-weight: bold;
`;

export function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: any) => {
            // On précise bien le type ici aussi
            e.preventDefault();
            setDeferredPrompt(e);
            setShowButton(true); // Afficher le bouton d'installation
        };

        window.addEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt,
        );

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((reg) => console.log('Service worker registered', reg))
                .catch(() => console.log('Failed to register service worker'));
        }

        // Nettoyage du gestionnaire d'événements au démontage du composant
        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                handleBeforeInstallPrompt,
            );
        };
    }, []); // On ajoute les crochets pour exécuter l'effet une seule fois au montage

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Afficher l'invite d'installation
            const { outcome } = await deferredPrompt.userChoice; // Attendre la réponse de l'utilisateur
            if (outcome === 'accepted') {
                console.log("L'utilisateur a accepté l'installation");
            } else {
                console.log("L'utilisateur a refusé l'installation");
            }
            setDeferredPrompt(null); // Réinitialiser l'événement
            setShowButton(false); // Cacher le bouton
        }
    };

    return (
        <>
            {showButton && (
                <button onClick={handleInstallClick}>Installer la PWA</button>
            )}
        </>
    );
}
