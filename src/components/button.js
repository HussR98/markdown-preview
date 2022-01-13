import React from 'react';
import { ButtonWrapper } from './button.styles';

const Button = ({label = 'click me', operation, data}) => {
    return <ButtonWrapper onClick = {operation(data)}>{label}</ButtonWrapper>
}

export default Button;