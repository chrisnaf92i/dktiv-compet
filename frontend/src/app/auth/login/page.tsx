'use client';
import { Button } from '@/components/button';
import { InputText, InputTextWithIcon, Label } from '@/components/input';
// import OrSeparator from '@/components/or-separator';
import { BodyText, H1 } from '@/components/text';
import colors from '@/utils/colors';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import colors from '@/utils/colors';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    return (
        <main style={{ margin: '16px' }}>
            <H1>Connecte toi</H1>

            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const response = await fetch(
                            'http://localhost:4000/api/auth/login',
                            {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    email,
                                    password,
                                }),
                            },
                        );
                        const data = await response.json();
                        console.log(data);
                        toast.success("L'utilisateur a été créé avec succès");
                        router.push('/');
                    } catch {
                        toast.error("Une erreur s'est produite");
                    }
                }}
            >
                <Label>
                    Email
                    <InputText
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="john@gmailcom"
                        required
                    />
                </Label>
                <Label style={{ marginBottom: '24px' }}>
                    Mot de passe
                    <InputTextWithIcon
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="**********"
                        iconPath="/images/icon/Eye_light.svg"
                    />
                    <BodyText
                        $type="Regular16"
                        style={{ color: colors.terciary.grey500 }}
                    ></BodyText>
                </Label>

                <Button
                    $enabled={email != '' && password != ''}
                    disabled={email == '' && password == ''}
                    type="primary"
                    onClick={() => {}}
                >
                    inscription
                </Button>
            </Form>

            <Link href="/auth/signin"> Pas encore de compte ? Inscris toi</Link>
            {/* <OrSeparator
                margin="40px 0"
                lineColor={colors.terciary.grey300}
                textColor={colors.base.black}
            /> */}
        </main>
    );
}

const Form = styled.form`
    width: 100%;
    box-sizing: border-box;
`;
