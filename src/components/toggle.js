import React from "react";
import { ToggleWrapper, SwitchWrapper, LabelWrapper1, LabelWrapper2 } from "./toggle.styles";



const Toggle = ({label1 = 'on', label2 = 'off', setting = true, onClick}) => {


    return <ToggleWrapper onClick = {onClick}>
    <SwitchWrapper animate = {setting ? { x: 0 } : { x: '100%' }} />
    <LabelWrapper1 setting = {setting}>{label1}</LabelWrapper1>
    <LabelWrapper2 setting = {setting}>{label2}</LabelWrapper2>
    </ToggleWrapper>
}

export default Toggle;