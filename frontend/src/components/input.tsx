'use client';
import colors from '@/utils/colors';
import styled from 'styled-components';

export const InputText = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 16px;
    padding: 12px 16px;
    font-family: 'dm-sans';
    width: 100%;
    align-self: stretch;
    border: 1px solid ${colors.terciary.grey400};
    border-radius: 8px;
    outline: none;
`;

export const Label = styled.label`
    width: 100%;
    display: block;
    color: ${colors.base.black};
    font-family: 'dm-sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 12px 0;
`;

type InputTextWithIconProps = {
    iconPath: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    onClickIcon?: () => void;
};

export const InputTextWithIcon = ({
    onChange,
    type,
    placeholder,
    onClickIcon,
    iconPath,
}: InputTextWithIconProps) => {
    return (
        <InputTextContainer>
            <InputTextForIcon
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
            <IconButton type="button" onClick={onClickIcon}>
                <Icon src={iconPath} alt="icon" />
            </IconButton>
        </InputTextContainer>
    );
};

const InputTextContainer = styled.div`
    display: flex;
    border: 1px solid ${colors.terciary.grey400};
    align-items: center;
    gap: 8px;
    background-color: ${colors.base.white};
    border-radius: 8px;
    padding: 4px;
    outline: none;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const InputTextForIcon = styled.input`
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-family: 'dm-sans';
    padding: 8px;
    flex: 1;
    outline: none;
`;

const IconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
