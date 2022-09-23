import React from 'react'
import styled from 'styled-components'
import LOGO from '../../imagenes/nav/LOGO.png'
import { Navlist } from './Navlist'



/* Styled Components: start */

const NavStyled= styled.div`
    width: 100%;
    height: 4rem;
    background-color: ${({theme})=> theme.bgColor};
    display: flex;
    border-bottom: 1px solid #DADBDB;
`

const LogoStyled=styled.img`
    width: 5rem;  
`
const LogoContainerStyled= styled.div`
  width: 50%;
`

/* Styled Components: End */

export const Nav = () => {
  return (
    <NavStyled>
      <LogoContainerStyled>
        <LogoStyled src={LOGO}></LogoStyled>
      </LogoContainerStyled>
      <Navlist/>
    </NavStyled>
  )
}
