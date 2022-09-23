import {ProductDescription,ProductDescriptionContainer, ButtonContainer, ProductIMG, ProductName, ProductPrice, ProductsCardStyled, ContainerAllCards, ContainerEachCard} from "./StylesCard";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../cart/cart-action";


export const ProductsCardNamed=({id,name,src,price,text,description})=>{
    
    const initialState=true
    const [value,setValue]=useState(initialState)
    const dispatch=useDispatch()
    return(
    <ContainerAllCards data-aos="fade-down">
        <ProductsCardStyled onClick={()=>{
            setValue(!value)
        }}>
        {
            value ? 
            <ContainerEachCard >
            <ProductIMG src={src} alt={name}/>
            <ProductName>{name}</ProductName>
            <ProductPrice>${price}</ProductPrice>
            </ContainerEachCard>
            :
            <ProductDescriptionContainer >
            <ProductDescription>
                {description}
            </ProductDescription>
            </ProductDescriptionContainer>
        }



        </ProductsCardStyled>

        <ButtonContainer>
            <Button variant="outlined" onClick={()=>{
                dispatch(addProduct({name,price,src,id}))
            }}>
                {text}
            </Button>
        </ButtonContainer>
    </ContainerAllCards>

)};