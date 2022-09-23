import styled from "styled-components"

/* Styled Components: Start */


export const ContainerAllCards=styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-top: 2rem;
`

export const ContainerEachCard=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`

export const ProductsCardStyled=styled.div`
width: 15rem;
background-color: ${({theme})=> theme.prodColor};
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
box-shadow: ${({theme})=> theme.shadow};
border: none;

`
export const ProductIMG=styled.img`
    width: 15rem;
    object-fit: contain;
    border: none;
`
export const ProductName=styled.h3`
    font-size: 1.1rem;
    color: white;
`

export const ProductPrice=styled.h3`
    font-size: 1.1rem;
    color: white;
`

export const ProductDescriptionContainer=styled.div`
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F6F9FB;
`
export const ProductDescription=styled.p`
    width: 11rem;
    color: #252627;
   text-align: center;
`

export const ButtonContainer=styled.div`
    width: 100%;
    margin-top: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
`

/* Styled Compónents: End */