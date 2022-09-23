import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ProductsCardNamed } from './ProductCARD'

/* Styled Components: Start */
const ProductsCardContainerStyled=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
`
/* Styled Compónents: End */



export const ProductsCard = () => {
    const {selectedCategory}= useSelector(state=>state.categories)
    const {products}= useSelector(state=> state.products)
  return (
   <ProductsCardContainerStyled>
    {
        Object.entries(products).map(([category, product])=>
        (!selectedCategory || category === selectedCategory)
        ? product.map(product => <ProductsCardNamed key={product.id} {...product} text='Comprar'/>)
        : []
    )}
   </ProductsCardContainerStyled>   
)};
