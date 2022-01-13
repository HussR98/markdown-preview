import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr 8fr;
    height: 100vh;
    grid-gap: 0% 10%;
    margin: 0% 10%;
`

export const MarkdownWrapper = styled.div`
    width: 100%;
    height: 60vh;
    border: solid black 2px;
    grid-row: 3/4;
    grid-column: 2/3;
    justify-self: center;
    margin-top: 3px;
    border-radius: 6px;
    background: white;

    overflow: auto;
`