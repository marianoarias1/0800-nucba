import React from 'react'
import { FooterContainer, FooterStyled, SmallContainer, SmallStyled } from './FooterStyles'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterStyled>
            <SmallContainer>
                <SmallStyled>Hecho con amor para NUCBA, espero que les guste 💖 </SmallStyled>
            </SmallContainer>
        </FooterStyled>
    </FooterContainer>
  )
}
