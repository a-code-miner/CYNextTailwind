'use client';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
    // const successLogin = credentialResponse => {
    //     const userInfo = jwtDecode(credentialResponse.credential); // it can be run in server for login or signup
    //     console.log(userInfo);
    //     console.log(credentialResponse);
    // };

    // const catchLogin = () => {
    //     console.log('Login Failed');
    // };

    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    //             headers: {
    //                 Authorization: `Bearer ${tokenResponse.access_token}`
    //             }
    //         });
    //         console.log(res);
    //     }
    // });

    const { data: session } = useSession();
    console.log(session);

    // return session ? (
    //     <button type='button' className='bg-gray-300 rounded-md h-12 w-full' onClick={() => signOut()}>
    //         {session.user.name}
    //     </button>
    // ) : (
    //     <button className='bg-gray-300 rounded-md h-12 w-full' onClick={() => signIn("github")}>Sign-in with Github</button>
    //     // <button className='bg-red-300 rounded-md h-12 w-full' onClick={() => login()}>Sign-in with Google</button>
    //     // <GoogleLogin
    //     //     onSuccess={successLogin}
    //     //     onError={catchLogin}
    //     // />
    // );
    return (
        <button className='bg-red-300 rounded-md h-12 w-full' onClick={() => signIn()}>Sign-in</button>
    )
};

export default AuthButton;
