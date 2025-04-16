'use client';
import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = () => {

    const { data: session } = useSession();
    console.log(session);

    return (
        <button type='button' className='bg-red-300 rounded-md h-12 w-full' onClick={() => signIn()}>Sign-in</button>
    )
};

export default AuthButton;
