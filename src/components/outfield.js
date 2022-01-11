import React from 'react';
import { OutfieldWrapper } from './outfield.styles';

const Outfield = ({displayed = 'output is here'}) => {
    return <OutfieldWrapper>{displayed}</OutfieldWrapper>
};

export default Outfield