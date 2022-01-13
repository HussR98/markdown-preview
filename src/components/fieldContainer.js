import React, {useState} from 'react';
import Infield from './infield';
import Outfield from './outfield';
import { marked } from 'marked';
import { ContainerWrapper, MarkdownWrapper } from './fieldContainer.styles';
import Toggle from './toggle';
import Button from './button';
import Title from './title';


const FieldContainer = ({def = 'type markdown here'}) => {
    const [displayed, setDisplayed] = useState(def);
    const [started, setStarted] = useState(false);

    const [setting, toggleSetting] = useState(true);

    const onToggleClick = () => {
        setting ? toggleSetting(false) : toggleSetting(true)
    }

    function createMarkup() {
        return {__html: marked.parse(displayed)};
      }

    const onChange = (e) => {
        setDisplayed(e.target.value);
        setStarted(true);
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    return (
    <ContainerWrapper>
        <Title titleText = 'Markdown Preview'/>
        <Toggle label1 = 'Markdown' label2 = 'HTML' setting = {setting} onClick = {onToggleClick}/>
        <Button label = 'Copy to clipboard' operation = {copyToClipboard} data = {displayed}/>
        <Infield setter = {setDisplayed} val = {displayed} onChange = {onChange}/>
        {setting ? 
        <MarkdownWrapper dangerouslySetInnerHTML = {started ? createMarkup() : {__html: '<p>Markdown Preview</p>'}}/> :
        <Outfield displayed = {started ? marked.parse(displayed) : 'HTML Preview'}/>
        }
    </ContainerWrapper>
    )
};

export default FieldContainer;