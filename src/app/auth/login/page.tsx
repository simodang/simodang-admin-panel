'use client';
import { Button } from '@mui/material';
// import { login, logout } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, inMemoryPersistence, setPersistence, signInWithRedirect } from 'Firebase/auth';
// import { auth } from './config';
require('dotenv').config();

import { initializeApp, getApps } from 'Firebase/app';
import { useState } from 'react';
// import { } from 'Firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PROJECT_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PROJECT_APP_ID,
};

export default function LoginPage() {

    const [token, setToken] = useState <String | undefined | null>();

    if (!getApps().length) {
        initializeApp(firebaseConfig);
    }
    
    const auth = getAuth();
    
    const provider = new GoogleAuthProvider();
    
    const login = async () => {
        console.log(auth);
        await setPersistence(auth, inMemoryPersistence);
        signInWithPopup(auth, provider)
            .then((result) => {
                let credential: any = null;
                if(token === null || token === undefined){
                    credential = GoogleAuthProvider.credentialFromResult(result);
                    setToken(credential?.accessToken);
                }
                // const token = credential?.accessToken;
                const user = result.user;
                setToken(token);
                console.log(result);
                console.log({ credential, token, user });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
            });
    }
    
    const logout = async () => {
        const currentUser = auth.currentUser;
        auth.signOut().then(() => {
            console.log('Sudah logout');
            setToken(null);
            console.log(token);
        })
    }
    

    return (
        <div>
            <Button onClick={login}>Login</Button>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}