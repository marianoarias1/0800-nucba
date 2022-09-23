import styled from "styled-components";
import {Formik as FormikContainer, Form as FormikForm} from 'formik'


export const LoginContainer=styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-direction: column;
`

export const LoginStyled=styled.div`
    display: flex;
    width: 70%;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.prodColor};
    flex-direction: column;
    border-radius: 10px;
    box-shadow: ${({theme})=> theme.shadow};
`

export const NavLogin=styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleNav=styled.h2`
    font: 1.2rem 'Barlow Semi Condensed', sans-serif;
    font-weight: 400;
    color: #D7D0DE;
    text-decoration: underline;
`

export const ImageContainer=styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const ImageDiamond=styled.img`
    width: 100px;
    height: 100px;
`

export const InputContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Formik= styled(FormikContainer)`
    display: flex;
    flex-direction: column;
`

export const Form=styled(FormikForm)`
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`
export const FormContiner=styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ButtonContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonSubmit=styled.button`
    width: 8rem;
    height: 1.7rem;
    border-radius: 20px;
    color:#D7D0DE;
    background-color: #5C5470;
    border: none;
    :active{
        transform: scale(0.9);
    }

  
    :disabled{
    background-color: #9C9C9C;
    transform: scale(1);
    cursor: not-allowed;
  }
`

export const InputUser=styled.input`
    border: ${({isError}) => (isError ? '1px solid #fb103d' : 'none')};
    width: auto;
    height: 1.8rem;
    text-align: center;
    border-radius: 20px;
`
export const LabelLogin=styled.label`
    color:#D7D0DE;
    font: 1rem 'Barlow Semi Condensed', sans-serif;
`

export const LoginGoogleContainer=styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogingGoogle= styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 100%;
    transition:all 1s ease-in-out;
    cursor: pointer;
    :hover{ 
        transform: rotateY(360deg);
        
    }

`

export const Divisor= styled.div`
    width: 80%;
    height: 2px;
    background-color: ${({theme})=>theme.text};
`

export const SmallGoogle=styled.small`
    color:#D7D0DE;
    font: 1rem 'Barlow Semi Condensed', sans-serif;
    margin-top: 15px;
`

export const ErrorMessageStyled=styled.small`
    color: #fb103d;

`