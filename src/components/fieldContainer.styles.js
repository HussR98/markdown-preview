import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr 8fr;
    justify-content: center;
    height: 90vh;
`

export const MarkdownWrapper = styled.div`
    width: 25vw;
    height: 80%;
    border: solid black 1px;
    grid-row: 3/4;
    grid-column: 2/3;
    justify-self: center;
`