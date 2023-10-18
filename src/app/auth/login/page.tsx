'use client';
// import { UserAuth } from './AuthContext';
import { Button } from '@mui/material';
import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, Auth, getAuth, inMemoryPersistence } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config';
import axios from 'axios';

export default function LoginPage() {
    const [user, setUser] = useAuthState(auth);
    const router = useRouter();

    const googleSignIn = () => {
        auth.setPersistence(inMemoryPersistence).then(async () => {
            console.log("google signin");
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).then(async (res: any) => {
                const response = await axios({
                    url: `http://devel-filkomub.site/auth/${res.user.uid}`,
                    method: 'post',
                });
                localStorage['token'] = response.data.token;
                router.push('/');
            });
        });
    }

    const handleSignIn = () => {
        try {
            googleSignIn();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { console.log(user) }, [user]);

    return (
        <div>
            <Button onClick={handleSignIn}>Login</Button>
        </div>
    )

}