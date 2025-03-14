'use client';
import { Button } from '@/components/button';
import { InputText, InputTextWithIcon, Label } from '@/components/input';
// import OrSeparator from '@/components/or-separator';
import { BodyText, H1 } from '@/components/text';
import colors from '@/utils/colors';
// import colors from '@/utils/colors';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main>
            <H1 style={{ margin: '0 16px' }}>Créer ton compte</H1>

            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const response = await fetch(
                            'http://localhost:4000/api/auth/signin',
                            {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    firstName,
                                    lastName,
                                    phone,
                                    email,
                                    password,
                                }),
                            },
                        );

                        const data = await response.json();
                        console.log(data);
                        alert('Account is successfully created');
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                <Label>
                    Prénom
                    <InputText
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        type="text"
                        placeholder="John"
                        required
                    />
                </Label>
                <Label>
                    Nom
                    <InputText
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        type="text"
                        placeholder="Doe"
                        required
                    />
                </Label>
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
                <Label>
                    Téléphone
                    <InputText
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        type="phone"
                        placeholder="+XX X XX XX XX XX"
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
                    >
                        Utilise au moins 10 caractères
                    </BodyText>
                </Label>

                <Button $enabled={true} type="primary" onClick={() => {}}>
                    inscription
                </Button>
            </Form>
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
    padding: 0 16px;
`;
