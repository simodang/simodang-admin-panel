'use client';
// import { UserAuth } from './AuthContext';
import { Button } from '@mui/material';
import { useContext, createContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, Auth, getAuth, inMemoryPersistence } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config';

export default function LoginPage() {
    const [user, setUser] = useAuthState(auth);

    const googleSignIn = () => {
        auth.setPersistence(inMemoryPersistence).then(async () => {
            console.log("google signin");
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        });
    }

    const logOut = async () => {
        await signOut(auth);
        console.log(auth);
    }
    const handleSignIn = () => {
        try {
            googleSignIn();
        } catch (err) {
            console.log(err);
        }
    }

    const handleSignOut = () => {
        try {
            logOut();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { console.log(user) }, [user]);

    return (
        <div>
            {
                !user ? (
                    <Button onClick={handleSignIn}>Login</Button>
                ) : (
                    <Button onClick={handleSignOut}>Logout</Button>
                )
            }
        </div>
    )

}