import React from 'react'
import styled from 'styled-components'
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { toggleVisibleCart } from '../cart/cart-action';
import { Link } from 'react-router-dom';




/* Styled Components: start */

const NavListStyled= styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`

const LinkStyled= styled.a`
    text-decoration: none;
    color: ${({theme})=> theme.text};
`

const ItemContainerStyled= styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 40%;
    color: ${({theme})=> theme.text};
`

/* Styled Components: End */


const LinkStyles={
    textDecoration: 'none',
    color: (theme)=>theme.text
}

export const Navlist = () => {
    const dispatch= useDispatch()
  return (
    <NavListStyled>
        <ItemContainerStyled>
            <Link to='/' style={LinkStyles}>Productos</Link> 
            <Link to='/home' style={LinkStyles}>Home</Link> 
            <Link to='/login' style={LinkStyles}>Login</Link> 
            <LinkStyled href="#modal">
                <BsCart3 
                style={{fontSize: '1.3rem', cursor:'pointer', scrollBehavior: 'smooth'}} 
                onClick={()=>{
                    dispatch(toggleVisibleCart())
                }}
                />
            </LinkStyled>
        </ItemContainerStyled>
    </NavListStyled>
  )
}
