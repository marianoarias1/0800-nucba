import React from 'react'
import styled from 'styled-components'
import IMG from '../../imagenes/Header/NUCBAWatch.jpg'


/* Styled components: Start */

const HeaderStyled= styled.div`
    width: 80%;
    height: 20rem;
    background-color: black;
    display: flex;
    box-shadow: ${({theme})=> theme.shadow};
`

const HeaderStyledContainer=styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderIMGStyled= styled.img`
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
`

const HeaderTitleStyled= styled.h1`
    width: 2rem;
    color: #EBF7F7 ;
    position: absolute;
    z-index: 2;
    font-family: 'Anton', serif;
    font-size: 2.7rem;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: right;
`

const HeaderTitleContainerStyled=styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: row;
    margin-left: 5rem;
    position: absolute;
`

/* Styled components: End */

const HeaderTitle=({text})=>{
    return(
        <HeaderTitleContainerStyled>
            <HeaderTitleStyled>
                {text}
            </HeaderTitleStyled>
        </HeaderTitleContainerStyled>
    )
}

export const Header = () => {
  return (
    <HeaderStyledContainer>
        <HeaderStyled>
            <HeaderIMGStyled src={IMG}/>
            <HeaderTitle text='PROXIMAMENTE NUCBA WATCH'></HeaderTitle>
        </HeaderStyled>
    </HeaderStyledContainer>

  )
}
