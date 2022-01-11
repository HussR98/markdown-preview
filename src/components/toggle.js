import React from "react";
import { ToggleWrapper, SwitchWrapper } from "./toggle.styles";



const Toggle = ({label1 = 'on', label2 = 'off', setting = true, onClick}) => {


    return <ToggleWrapper onClick = {onClick}><SwitchWrapper animate = {setting ? { x: 0 } : { x: '100%' }} /></ToggleWrapper>
}

export default Toggle;