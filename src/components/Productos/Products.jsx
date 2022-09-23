import React from 'react'
import styled from 'styled-components'
import { ProductsCard } from './ProductsCard'

const ProductsContainerStyled=styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=> theme.bgColor};
`

export const Products = () => {
  return (

    <ProductsContainerStyled>
        <ProductsCard></ProductsCard>
    </ProductsContainerStyled>
  )
}
