import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../header/Header'
import { Nav } from '../Nav/Nav'
import { Products } from '../Productos/Products'
import { SwitchComponent } from '../SwitchTheme/Switch'
import {Themes} from '../../components'
import {ThemeProvider} from 'styled-components'
import { Category } from '../category/Category'
import { Modal } from '../Modal/Modal'
import {useDispatch, useSelector } from 'react-redux'
import { Footer } from '../Footer/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, createUserProfile } from '../firebase/firebase-utils'
import { onSnapshot } from 'firebase/firestore'
import { setCurrentUser } from '../../redux/user/user-actions'
import { useEffect } from 'react'


const ContainerStyled=styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=> theme.bgColor};
`

export const TitleProducts= styled.h2`
  font-size: 2rem;
  width: 100%;
  text-align: center;
  color: ${({theme})=> theme.text};
`


const onAuthChange=(dispatch, action)=>{
  return onAuthStateChanged(auth, async user=>{

    if(user){
      const {ref} = await createUserProfile(user)

      onSnapshot(ref, snapshot=>{
        const userData= snapshot.data
        console.log({userData})
        dispatch(action({id: userData.id, ...userData}))
      })
    }else{
      dispatch(action(null))
    }
  });
}

export const Container = () => {
  const [theme,setTheme]= useState('light')
  const {visible}= useSelector(state=> state.cart)
  const dispatch=useDispatch()

  useEffect(()=>{
    const unsuscribe = onAuthChange(dispatch, setCurrentUser);

    return ()=> unsuscribe();
  },[dispatch])

  return (
    <ThemeProvider theme={Themes[theme]}>
    <ContainerStyled>
        <Nav/>
        <SwitchComponent theme={theme} setTheme={setTheme}/>
        <Header/>
        <TitleProducts id='products'>Productos</TitleProducts>
        <Category/>
        {
          visible && <Modal isHidden={!visible}/>
        }
        <Products/>

      <Footer/>
    </ContainerStyled>

    </ThemeProvider>

  )
}
