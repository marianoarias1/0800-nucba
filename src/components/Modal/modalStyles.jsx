import styled from "styled-components"

export const ModalConatiner=styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(2px);
z-index: 1000;
animation: zoom-in-zoom-out 1s ease;
@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}

`

export const ModalStyled=styled.div`
width: 50%;
height: 80%;
background-color: ${({theme})=>theme.bgColor};
z-index: 10000;
`

export const ModalNavContainer= styled.div`
    width: 98%;
    height: 1.8rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`

export const ModalSectionContainer=styled.div`
    width: 98%;
    height: 1.8rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
`

export const SectionDivisor=styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonDeletAll=styled.button`
  width:30px;
  height: 30px;
  border-radius: 5px;
  background-color:#AF3131;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  cursor: pointer;
  :active{
    background-color:#782A2A;
    transform: scale(0.9);
  }
  :disabled{
    background-color: #6E4D4D;
    transform: scale(1);
    cursor: not-allowed;
  }
`

export const TitleModal= styled.h1`
  color:${({theme})=> theme.text};
`



export const CloseModal= styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: #CA4F4F;
    color: #D7D0DE;
    border: none;
    cursor: pointer;
    box-shadow: .7px .7px 0px 0px ${({theme})=> theme.text};
    :active{
        box-shadow: 0px 0px 0px 0px ${({theme})=> theme.text};
        transform: translateY(1px);
        transform: translateX(1px);
    }

`

export const ProductContainer= styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
`

export const AllProductsContainer=styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: scroll;
::-webkit-scrollbar{
  ${({theme})=>theme.bgColor}
}
::-webkit-scrollbar-thumb{
  ${({theme})=>theme.text}
}
`

export const IMGContainer= styled.div`
    width: 50%;
    height: 4rem;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-left: 20px;
`

export const IMGProductCart= styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100%;
    border: none;
    box-shadow: 0px 0px 18px -6px rgba(0,0,0,0.74);
    transition: all .3s ease-in-out;

    :hover{
        transform: scale(1.5);
    }
`

export const ProductQualitiesContainer= styled.div`
    width: 50%;
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonAdd=styled.button`
  width:25px;
  height: 25px;
  border-radius: 5px;
  background-color:#494642;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
  :active{
    background-color:#85827D;
    transform: scale(0.9);
  }
`

export const ButtonRemove=styled.button`
  width:25px;
  height: 25px;
  border-radius: 5px;
  background-color:#494642;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
  :active{
    background-color:#85827D;
    transform: scale(0.9);
  }
`

export const PorductQualities= styled.p`
  font: 1.2rem 'Barlow Semi Condensed', sans-serif;
  font-weight: 400;
`
 

export const ContainerFooter=styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0;
  padding: 0;
`

export const FooterProducts= styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  background-color:#343433;
  flex-wrap: wrap;
`

export const DivisorFooter=styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`
export const DivisorFooterNumbres=styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

export const NumberProduct=styled.p`
  color: #E1E1E1;
  font-size: 1rem;
`

export const Subtotal=styled.p`
    color: #E1E1E1;
    font-size: 1rem;
`
export const ShippingCost=styled.p`
    color: #E1E1E1;
    font-size: 1rem;
`
export const TotalCost=styled.p`
    color: #E1E1E1;
    font-size: 1rem;
`

export const TitleCart=styled.h3`
  font-size: 1.8rem;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${({theme})=> theme.text};
`

export const ButtonBuyContainer=styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const ButtonBuyStyled=styled.button`
  width: auto;
  height: 1.7rem;
  border: none;
  border-radius: 20px;
  background-color:#5C5470;
  color:#D7D0DE;
  font-size: 0.99rem;
  cursor: pointer;
  :active{
    transform: scale(0.9);
  }

  :disabled{
    background-color: #9C9C9C;
    transform: scale(1);
    cursor: not-allowed;
  }
`