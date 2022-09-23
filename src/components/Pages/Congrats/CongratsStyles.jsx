import styled from "styled-components";



export const CongratsContainer=styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CongratsStyled=styled.div`
    width: 80%;
    height: 35rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5C5470;
    flex-direction: column;
    box-shadow: ${({theme})=>theme.shadow};
`

export const TitleCongratsContainer=styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleCongrats=styled.h2`
    font: 1.4rem 'Barlow Semi Condensed', sans-serif;
    color: #D7D0DE;
`
export const GifContainer= styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
`