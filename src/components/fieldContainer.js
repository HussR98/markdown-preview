import React, {useState} from 'react';
import Infield from './infield';
import Outfield from './outfield';
import {marked} from 'marked';



const FieldContainer = ({def = 'type text here'}) => {
    const [displayed, setDisplayed] = useState(def);

    function createMarkup() {
        return {__html: marked.parse(displayed)};
      }


    return (
    <div>
        <Infield setter = {setDisplayed} val = {displayed} onChange = {e => {setDisplayed(e.target.value)}}/>
        <Outfield displayed = {marked.parse(displayed)}/>
        <div dangerouslySetInnerHTML = {createMarkup()}/>
    </div>
    )
};

export default FieldContainer;