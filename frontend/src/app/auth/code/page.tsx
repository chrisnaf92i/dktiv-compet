'use client';
import { Button } from '@/components/button';
import { InputText } from '@/components/input';
// import OrSeparator from '@/components/or-separator';
import { BodyText, H1 } from '@/components/text';
import colors from '@/utils/colors';
import { useRouter } from 'next/navigation';
// import colors from '@/utils/colors';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Page() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const router = useRouter();

    return (
        <main style={{ margin: '16px' }}>
            <H1>Renseigne le code</H1>
            <BodyText
                $type="Regular16"
                style={{
                    marginTop: '8px',
                    marginBottom: '32px',
                    color: colors.terciary.grey500,
                }}
            >
                Tu as reçu un code de vérification sur ton adresse mail
                sophiedubois@gmail.com
            </BodyText>

            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    localStorage.setItem('isConnected', 'true');

                    router.push('/');
                }}
            >
                <InputContainer>
                    <InputNumber
                        onChange={(e) => {
                            setNumber1(e.target.value);
                        }}
                        type="number"
                        placeholder="Code"
                        required
                    />
                    <InputNumber
                        onChange={(e) => {
                            setNumber2(e.target.value);
                        }}
                        type="number"
                        placeholder="Code"
                        required
                    />
                    <InputNumber
                        onChange={(e) => {
                            setNumber3(e.target.value);
                        }}
                        type="number"
                        placeholder="Code"
                        required
                    />
                    <InputNumber
                        onChange={(e) => {
                            setNumber4(e.target.value);
                        }}
                        type="number"
                        placeholder="Code"
                        required
                    />
                </InputContainer>

                <Button
                    $enabled={
                        number1 != '' &&
                        number2 != '' &&
                        number3 != '' &&
                        number4 != ''
                    }
                    disabled={
                        number1 == '' &&
                        number2 == '' &&
                        number3 == '' &&
                        number4 == ''
                    }
                    type="primary"
                    onClick={() => {}}
                >
                    inscription
                </Button>
                <BodyText
                    $type="Medium16"
                    style={{
                        color: colors.terciary.grey500,
                        marginTop: '16px',
                    }}
                >
                    Tu n&apos;as pas reçu le code de sécurité ?
                </BodyText>

                <BodyText
                    $type="Medium16"
                    style={{
                        color: colors.terciary.grey400,
                        marginTop: '4px',
                    }}
                >
                    Renvoyer le code dans : 30s
                </BodyText>
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
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 4px;
`;

const InputNumber = styled(InputText)`
    width: 40px;
    height: 40px;
    text-align: center;
`;
