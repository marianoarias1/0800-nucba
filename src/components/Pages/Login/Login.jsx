import React, { useState } from 'react'
import { ButtonContainer, ButtonSubmit, Divisor, ErrorMessageStyled, Form, FormContiner, Formik, ImageContainer, ImageDiamond, InputContainer, InputUser, LabelLogin, LoginContainer, LogingGoogle, LoginGoogleContainer, LoginStyled, NavLogin, SmallGoogle, TitleNav } from './LoginStyles'
import { FcGoogle } from 'react-icons/fc';
import { Nav } from '../../Nav/Nav';
import { SwitchComponent } from '../../SwitchTheme/Switch';
import {ThemeProvider} from 'styled-components'
import Themes from '../../Themes/Themes';
import Diamante from '../../../imagenes/nav/diamante.png'
import { Footer } from '../../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field} from 'formik';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { createUserProfile, singIn, singInGoogle } from '../../firebase/firebase-utils';

const Input= ({children, name, htmlFor, type, id, placeholder})=>{
    return(
        <Field name={name}>
            {({ field, form: {errors,touched}})=>(
            <InputContainer>
                <LabelLogin htmlFor={htmlFor}>{children}</LabelLogin>
                <InputUser type={type} placeholder={placeholder} id={id} {...field} isError={errors[field.name]}/>

                <ErrorMessage name={field.name}>
                    {message=> <ErrorMessageStyled>{message}</ErrorMessageStyled>}
                </ErrorMessage>
            </InputContainer>
            )}

        </Field>
    )
}

const ERROR_CODES={
    WRONG_PASSWORD:'auth/wrong-password',
    NOT_FOUND: 'auth/user-not-found'
}

export const Login = () => {
    const [theme,setTheme]= useState('light')
    const navigate= useNavigate()
  return (
    <ThemeProvider theme={Themes[theme]}>
    <LoginContainer>
        <Nav/>
        <SwitchComponent theme={theme} setTheme={setTheme}/>
        <LoginStyled>
            <NavLogin>
                <TitleNav>
                    LOGUEATE!
                </TitleNav>
            </NavLogin>

            <ImageContainer>
                <ImageDiamond src={Diamante}/>
            </ImageContainer>

            <FormContiner>
                <Formik 
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={async (values)=>{
                    const {email,password, name}=values;
                    console.log(values)
                    try {
                        const {user}= await singIn(email, password)
                        const response= await createUserProfile(user)
                        navigate('/home')
                    } 
                    catch (error) {
                        const {code}=error

                        switch(code){
                            case ERROR_CODES.WRONG_PASSWORD:
                                return alert('Contraseña incorrecta')

                            case ERROR_CODES.NOT_FOUND:
                                return alert('Usuario no encontrado')

                            default:
                                return alert('Lo sentimos esto no debería estar pasando :c')
                        }
                    }
                }}
                >
                    <Form>
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
                        <ButtonSubmit type='submit'>INGRESAR</ButtonSubmit>
                    </ButtonContainer>

                    </Form>
                </Formik>

                <Link to='/register'>No tienes usuario? Registrare!</Link>

                <Divisor/>

                <SmallGoogle>Inicia sesion con google</SmallGoogle>
                <LoginGoogleContainer>

                    <LogingGoogle 
                    onClick={()=>{
                        const response= singInGoogle()
                    }}
                    >
                        <FcGoogle style={{fontSize:'2.5rem'}}></FcGoogle>
                    </LogingGoogle>
                </LoginGoogleContainer>
            </FormContiner>
        </LoginStyled>

        <Footer/>
    </LoginContainer>
    </ThemeProvider>
  )
}
