// 'use client';
// import { useContext, createContext, useState, useEffect } from 'react';
// import  { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, Auth } from 'firebase/auth';
// import {auth} from './config';

// type AuthContextType = {
//     user: Auth;
//     googleSignIn: () => void;
//     logOut: () => void;
// }

// const AuthContext = createContext<AuthContextType | Object>({});

// export const AuthContextProvider = ({ children }: {children: any}) => {
//     const [user, setUser] = useState<Auth | any>([{}]);
//     const googleSignIn = async () => {
//         console.log("google signin");
//         const provider = new GoogleAuthProvider();
//         await signInWithPopup(auth, provider);
//     }

//     const logOut = async () => {
//         await signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => {
//             setUser(currentUser);
//         });

//     }, [user]);

//     return(
//         <AuthContext.Provider value={{ user, googleSignIn, logOut}}>{children}</AuthContext.Provider>
//     )
// }

// export const UserAuth = () => {
//     return useContext(AuthContext) as AuthContextType;
// }