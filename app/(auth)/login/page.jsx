'use client';

import { loginAction } from '@/actions/authAction';
import AuthButton from '@/components/AuthButton';
import ToggleBtn from '@/components/partials/ToggleBtn';
import SubmitForm from '@/components/SubmitForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

const Login = () => {
    // const loginActionWithParams = loginAction.bind(null, 'Param1', 'Param2', 'Param3');
    const [state, formAction] = useFormState(loginAction, { error: '', success: false });
    console.log(state);
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        // اگر کاربر از طریق next-auth لاگین کرده باشد
        if (session) {
            router.push('/userpanel');
        }

        // بررسی لاگین از طریق سیستم توکن (اختیاری)
        async function checkLogin() {
            const res = await fetch('/api/checkAuth');
            if (res.ok) {
                router.push('/userpanel');
            }
        }
        checkLogin();
    }, [session, router]);
    return (
        <div className='flex justify-center items-center h-full w-full px-2  lg:px-10'>
            <form action={formAction} className='w-full text-gray-600 bg-gradient-to-b from-gray-300 to-gray-100 p-3 rounded-lg border-2 shadow'>
                <h1 className='text-center my-5'>فرم ورود</h1>
                {state.error && (<h1 className='text-center my-5'>{state.error}</h1>)}
                <div>
                    <label>شماره موبایل:</label>
                    <input name="phone" type='number' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                    <small className='text-red-500 block'>{state.errors?.phone?.at(0) || ''}</small>
                </div>
                <div className='mt-5'>
                    <label>رمز عبور:</label>
                    <input name="password" type='password' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                    <small className='text-red-500 block'>{state.errors?.password?.at(0) || ''}</small>
                </div>
                <div className='mt-5'>
                    <ToggleBtn value={1} name="remember" title="مرا بخاطر بسپار" />
                </div>

                <div className='my-6 px-4'>
                    <SubmitForm />
                </div>

                <div className='flex justify-center mt-5'>
                    <AuthButton />
                </div>
            </form>
        </div>
    );
};

export default Login;
