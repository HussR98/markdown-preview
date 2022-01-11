import React from 'react';
import { ButtonWrapper } from './button.styles';

const Button = ({label = 'click me'}) => {
    return <ButtonWrapper>{label}</ButtonWrapper>
}

export default Button;