import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './firebase-config';
import {getAuth, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification, createUserWithEmailAndPassword,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const app= initializeApp(firebaseConfig);

// Almacenamiento

export const firestore= getFirestore(app);

export const createUserProfile= async (userAuthenticated)=>{
    const userRef= doc(firestore, `user/${userAuthenticated.uid}`);
    
    const snapShot= await getDoc(userRef);

    if(!snapShot.exists()){
        const { email, photoURL, displayName}= userAuthenticated;
        try {
            await setDoc(userRef, {
                name: displayName,
                email,
                photoURL,
                createdAt: new Date(),
            });
        } 
        catch (error) {
            console.log(error)
        }
    }

    return snapShot;
};

// Auth

export const auth=getAuth();

    //crear usuario
    export const register= async (email, password)=> {
        const credentials= await createUserWithEmailAndPassword(auth, email, password)

        await sendEmailVerification(credentials.user, {
            url: 'http://localhost:3000/home'
        })

        alert(`Se envió un correo de verificación a: ${email}`)
        localStorage.setItem('username', credentials.user);
        return credentials;
    };

    //iniciar sesion con correo & pass
    export const singIn= async (email, password)=>{
        return(
            await signInWithEmailAndPassword(auth, email, password)
            )

    };

    //iniciar con google

    const providerGoogle= new GoogleAuthProvider();
    export const singInGoogle=()=>{
        signInWithPopup(auth, providerGoogle);
    };