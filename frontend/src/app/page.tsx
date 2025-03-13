import OnBoarding from '@/components/on-boarding';

export default function Home() {
    // const initialOnboardingValue =
    //     sessionStorage.getItem('connected') != 'dont-want';
    // const [showOnBoarding, setShowOnboarding] = useState<boolean>(true);

    // return showOnBoarding ? (
    return (
        <main>
            <OnBoarding />
        </main>
    );
    // ) : (
    //     <main> Page d&apos;acceuil</main>
    // );
}
