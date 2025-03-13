import PWAInstaller from '@/components/PWAInstaller';
<<<<<<< HEAD
import TabBar from '../layout/tab-bar';
import GlobalStyles from '@/global-styles';
import { Metadata, Viewport } from 'next';
import Header from '../layout/header';
=======
// import TabBar from '../../layout/tab-bar';
import GlobalStyles from '@/global-styles';
import { Metadata, Viewport } from 'next';
>>>>>>> ddd3352 (create onboarding)
// import Header from '../../layout/header';

export const metadata: Metadata = {
    title: 'DKTIV By Decathlon',
    description: "Une application qui reconnecte l'humain",
    manifest: '/manifest.json',
    icons: {
        apple: '/favicon/web-app-manifest-192x192.png',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#141414', // Déplacer themeColor ici
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GlobalStyles />
            <body style={{ margin: 0, padding: 0 }}>
                {children}
                {/* <TabBar /> */}
            </body>
        </html>
    );
}
