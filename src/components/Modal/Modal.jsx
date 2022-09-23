import {AllProductsContainer, ButtonAdd, ButtonBuyContainer, ButtonBuyStyled, ButtonDeletAll, ButtonRemove, CloseModal, ContainerFooter, DivisorFooter, DivisorFooterNumbres, FooterProducts, IMGContainer, IMGProductCart, ModalConatiner, ModalNavContainer, ModalSectionContainer, ModalStyled, NumberProduct, PorductQualities, ProductContainer, ProductQualitiesContainer, SectionDivisor, ShippingCost, Subtotal, TitleCart, TitleModal, TotalCost} from './modalStyles'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addProduct, clearCart, removeProduct, toggleVisibleCart} from '../cart/cart-action'
import { BsTrash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';


const ProductsCart=({name,price,src, quantity,id})=>{
    const dispatch= useDispatch()
    return(
        <ProductContainer>
            <IMGContainer>
                <IMGProductCart src={src}/>
            </IMGContainer>

            <ProductQualitiesContainer>
                <PorductQualities>{name}</PorductQualities>
                <PorductQualities>${price}</PorductQualities>

                <ButtonAdd
                onClick={()=>{
                    dispatch(addProduct({name,price,src,id}))
                }}
                >➕</ButtonAdd>
                <PorductQualities>{quantity}</PorductQualities>
                <ButtonRemove
                onClick={()=>{
                    dispatch(removeProduct(id))
                }}
                >➖</ButtonRemove>
            </ProductQualitiesContainer>
        </ProductContainer>
    )
}



const FooterModal=()=>{
    const dispatch= useDispatch()
    const {items, totalCost}=useSelector(state=>state.cart)
    const {user}= useSelector(state=>state.user)
    const navigate= useNavigate()

    return(
        <ContainerFooter>
        <FooterProducts>
            <DivisorFooter>
                <Subtotal>Subtotal:</Subtotal>
                <ShippingCost>Costo de Envío:</ShippingCost>
                <TotalCost>Total:</TotalCost>
            </DivisorFooter>

            <DivisorFooterNumbres>
                <NumberProduct>${totalCost}</NumberProduct>
                <NumberProduct>${300}</NumberProduct>
                <NumberProduct>${totalCost + 300}</NumberProduct>
            </DivisorFooterNumbres>


            <ButtonBuyContainer>
                <Link 
                to='/congrats'
                onClick={()=>{
                    dispatch(clearCart())
                }}
                style={{textDecoration:'none', color:'#D7D0DE' }}>
                    <ButtonBuyStyled
                    
                    disabled={!items.length}>
                        Realizar Pedido
                    </ButtonBuyStyled>
                </Link>    
            </ButtonBuyContainer>
        </FooterProducts>
        </ContainerFooter>
    )
}


export const Modal=()=>{
    const dispatch= useDispatch()
    const {items}=useSelector(state=>state.cart)
    return(
        <ModalConatiner  id='modal'>
            <ModalStyled>
                <ModalNavContainer>
                    <CloseModal 
                    onClick={()=>{
                        dispatch(toggleVisibleCart())
                    }}
                    >
                        X
                    </CloseModal>
                </ModalNavContainer>

                <ModalSectionContainer>
                    <SectionDivisor>
                        <TitleModal>Tus Productos</TitleModal>
                    </SectionDivisor>
                    
                    <SectionDivisor>
                        <ButtonDeletAll 
                            onClick={()=>{
                                dispatch(clearCart())
                            }}
                            disabled={!items.length}
                        >
                            <BsTrash style={{color:'white', fontSize:'2rem'}}></BsTrash>
                        </ButtonDeletAll>
                    </SectionDivisor>
                </ModalSectionContainer>
                
                <AllProductsContainer>
                    {
                       items.length ? items.map((item)=> <ProductsCart key={item.id} {...item}/>)
                       :
                       <TitleCart>Tu carrito está vacío</TitleCart>
                    }
                </AllProductsContainer>

      
                <FooterModal {...items}/>
            </ModalStyled>
        </ModalConatiner>
    )
}