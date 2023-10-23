'use client';
// import { UserAuth } from './AuthContext';
import { Button, Box } from '@mui/material';
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
            <Box
                justifyContent='center'
                alignItems='center'
            >Simodang Admin Panel</Box>
            <Button onClick={handleSignIn} sx={{color:'black'}} variant='outlined'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" style={{margin:'5 10 10 5'}} viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Sign In With Google
            </Button>
        </div>
        // <button className="gsi-material-button" onClick={handleSignIn}>
        //         <div className="gsi-material-button-state"></div>
        //         <div className="gsi-material-button-content-wrapper">
        //             <div className="gsi-material-button-icon">
        //                 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
        //                     <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
        //                     <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
        //                     <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
        //                     <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
        //                     <path fill="none" d="M0 0h48v48H0z"></path>
        //                 </svg>
        //             </div>
        //             <span className="gsi-material-button-contents">Sign in with Google</span>
        //             <span style={{display: "none"}}>Sign in with Google</span>
        //         </div>
        //     </button>
    )

}