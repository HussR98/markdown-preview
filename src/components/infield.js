import React from 'react';
import { InfieldWrapper } from './infield.styles';

const Infield = ({setter, val, onChange}) => {


    const onKeyDownHandler = (e) => {
        let keycode = e.keyCode;
        let valid = 
        (keycode > 47 && keycode < 58)   || // number keys
        keycode === 32 || keycode === 13   || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 47 && keycode < 58)   || // )!@#$%^&*(
        (keycode > 64 && keycode < 91)   || // letter keys
        (keycode > 95 && keycode < 112)  || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);   // [\]' (in order)

        if (keycode === 13) {
            setter(val + '\n');
        }
        else if (valid){
            setter(val + e.key);
        }
    }

    return <InfieldWrapper defaultValue= {val} onKeyDown = {onKeyDownHandler} onChange = {onChange}/>
}

export default Infield;