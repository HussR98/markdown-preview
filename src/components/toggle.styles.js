import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-row: 2/3;
    grid-column: 2/3;
    width: 20vw;
    background-color: black;
    justify-self: center;
`
export const SwitchWrapper = styled(motion.div)`
    width: 50%;
    height: 90%;
    background-color: pink;
`