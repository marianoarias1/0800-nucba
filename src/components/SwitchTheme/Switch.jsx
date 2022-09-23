import React from 'react'
import { Switch } from '@mui/material'
import styled from 'styled-components'

const SwitchContainer= styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const SwitchComponent = (props) => {


  const changeMode=()=>{
    if(props.theme==='light'){
      props.setTheme('dark')
    }else{
      props.setTheme('light')
    }
  }
  return (
    <SwitchContainer>
        <Switch  color='secondary' onClick={()=> changeMode()}></Switch>
    </SwitchContainer>

  )
}
