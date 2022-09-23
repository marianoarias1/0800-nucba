import * as Yup from 'yup'

export const loginValidationSchema= Yup.object({
    email:Yup.string().email('Correo electronico inválido').required('Campo requerido'),
    password:Yup.string().min(8,'Requiere mínimo 8 caracteres').required('Campo requerido'),
})

export const registerValidationSchema= Yup.object({
    email:Yup.string().email('Correo electronico inválido').required('Campo requerido'),
    password:Yup.string().min(8, 'Requiere mínimo 8 caracteres').required('Campo requerido'),
    name:Yup.string().required('Campo requerido'),
})