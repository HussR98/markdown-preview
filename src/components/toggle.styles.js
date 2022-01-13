import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    grid-row: 2/3;
    grid-column: 2/3;
    width: 20vw;
    justify-self: center;
    border: 3px solid rgb(29 161 242);;
    border-radius: 40px;
    padding: 5px 3%;
    font-weight: bold;
`
export const SwitchWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgb(29 161 242);
    grid-row: 1/2;
    grid-column: 1/2;
    border-radius: 40px;
`

export const LabelWrapper1 = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 1;
    user-select: none;
    color: ${props => props.setting ? 'white' : 'silver'}
`
export const LabelWrapper2 = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;
    z-index: 1;
    user-select: none;
    color: ${props => !props.setting ? 'white' : 'silver'}
`