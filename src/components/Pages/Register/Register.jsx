import React, { useEffect, useState } from 'react'
import { ButtonContainer, ButtonSubmit, Divisor, ErrorMessageStyled, Form, FormContiner, Formik, ImageContainer, ImageDiamond, InputContainer, InputUser, LabelRegister, NavRegister, RegisterContainer, RegisterGoogleContainer, RegisterStyled, SmallGoogle, TitleRegister } from './RegisterStyles'
import Diamante from '../../../imagenes/nav/diamante.png'
import { LogingGoogle } from '../Login/LoginStyles'
import { FcGoogle } from 'react-icons/fc'
import { Footer } from '../../Footer/Footer'
import { ThemeProvider } from 'styled-components'
import Themes from '../../Themes/Themes'
import { Nav } from '../../Nav/Nav'
import { SwitchComponent } from '../../SwitchTheme/Switch'
import { ErrorMessage, Field } from 'formik'
import { registerInitialValues } from '../../formik/initialValues'
import { registerValidationSchema } from '../../formik/validationSchema'
import { register, singInGoogle } from '../../firebase/firebase-utils'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'


const Input=({children, name, htmlFor, type, id, placeholder})=>{
    return(
        <Field name={name}>
            {({ field, form: {errors,touched}})=>(
            <InputContainer>
                <LabelRegister htmlFor={htmlFor}>{children}</LabelRegister>
                <InputUser type={type} placeholder={placeholder} id={id} {...field} isError={errors[field.name]}/>

                <ErrorMessage name={field.name}>
                    {message=> <ErrorMessageStyled>{message}</ErrorMessageStyled>}
                </ErrorMessage>
            </InputContainer>
            )}

        </Field>
    )
};

const ERROR_CODES={
    EMAIL_IN_USE: 'auth/email-already-in-use'
}

export const Register = () => {
    const [theme,setTheme]= useState('light')
    const navigate=useNavigate()
  return (
    <ThemeProvider theme={Themes[theme]}>
    <RegisterContainer>
        <Nav/>
        <SwitchComponent theme={theme} setTheme={setTheme}/>
        <RegisterStyled>
            <NavRegister>
                <TitleRegister>
                    REGISTRATE!
                </TitleRegister>
            </NavRegister>

            <ImageContainer>
                <ImageDiamond src={Diamante}/>
            </ImageContainer>

            <FormContiner>
                <Formik 
                initialValues={registerInitialValues}
                validationSchema={registerValidationSchema}
                onSubmit={async (values,{resetForm})=>{
                    const {email, password, name}= values;
                    try {
                        const response= await register(email, password, name)
                        resetForm()
                        navigate('/home')
                    } catch (error) {
                        if(error.code ===ERROR_CODES.EMAIL_IN_USE){
                            alert('Este correo ya está en uso')
                        }
                    }
                }}
                >
                    <Form>
                    <Input
                    htmlFor='name'
                    type='text'
                    placeholder='Ingrese su nombre'
                    id='name'
                    name={'name'}
 
                    >
                        INGRESA TU NOMBRE COMPLETO
                    </Input>
                    <Input
                    htmlFor='email'
                    type='text'
                    placeholder='Ingrese su email'
                    id='email'
                    name='email'
                    >
                        TU EMAIL
                    </Input>

                    <Input
                    htmlFor='password'
                    type='password'
                    placeholder='Ingrese su contraseña'
                    id='password'
                    name='password'
 
                    >
                        TU CONTRASEÑA
                    </Input>

                    <ButtonContainer>
                        <ButtonSubmit type='submit'>CREAR</ButtonSubmit>
                    </ButtonContainer>

                    </Form>
                </Formik>

                    <Divisor/>

                    <SmallGoogle>Crea tu usuario con google</SmallGoogle>
                    <RegisterGoogleContainer>
                        <LogingGoogle onClick={e=>{
                            const response= singInGoogle();
                            navigate('/home')
                        }}>
                            <FcGoogle style={{fontSize:'2.5rem'}}></FcGoogle>
                        </LogingGoogle>
                    </RegisterGoogleContainer>
                </FormContiner>
            </RegisterStyled>
        <Footer/>
    </RegisterContainer>

    </ThemeProvider>
  )
}
