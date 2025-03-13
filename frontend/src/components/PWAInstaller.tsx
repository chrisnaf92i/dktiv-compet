'use client';
import { useEffect, useState } from 'react';

export default function PWAInstaller() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Définit l'état pour indiquer qu'on est côté client
    }, []);

    useEffect(() => {
        if (isClient && 'serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(() => {
                    console.log('Service Worker enregistré !');
                })
                .catch((err) => {
                    console.error(
                        "Erreur lors de l'enregistrement du service worker :",
                        err,
                    );
                });
        }
    }, [isClient]);

    return null;
}
