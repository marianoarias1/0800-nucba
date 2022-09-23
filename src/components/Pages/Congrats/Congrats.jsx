import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../../Footer/Footer'
import { Nav } from '../../Nav/Nav'
import { SwitchComponent } from '../../SwitchTheme/Switch'
import Themes from '../../Themes/Themes'
import { CongratsContainer, CongratsStyled, GifContainer, TitleCongrats, TitleCongratsContainer } from './CongratsStyles'

export const Congrats = () => {
    const [theme,setTheme]= useState('light')
  return (
    <ThemeProvider theme={Themes[theme]}>
    <CongratsContainer>
        <Nav/>
        <SwitchComponent theme={theme} setTheme={setTheme}/>
        <CongratsStyled>
            <TitleCongratsContainer>
                <TitleCongrats>Gracias por tu pedido, ya estamos realizando el empaquetado, pronto llegará</TitleCongrats>
            </TitleCongratsContainer>

            <GifContainer>
                <iframe src="https://giphy.com/embed/LTfDzisMdvtGsOz4E7" style={{borderRadius:'20px', boxShadow:' 0px 0px 32px -5px rgba(0,0,0,0.48)'}} width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </GifContainer>
        </CongratsStyled>
        <Footer/>
    </CongratsContainer>
    </ThemeProvider>
  )
}
