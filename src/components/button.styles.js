import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: grid;
    width: 20%;
    justify-self: end;
    border: 3px solid rgb(29 161 242);
    border-radius: 40px;
    padding: 5px 3%;
    font-weight: bold;
    align-items: center;
    user-select: none;
    color: silver;

    grid-row: 2/3;
    grid-column: 1/2;

    transition: all 0.1s;
    
    :hover {
        background-color: rgb(29 161 242);
        color: white;
    }
`