import React from 'react';
import { TitleWrapper } from './title.styles';

const Title = ({titleText = 'title text'}) => {
    return <TitleWrapper>{titleText}</TitleWrapper>
}

export default Title;