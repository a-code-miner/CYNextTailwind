import React from 'react';
import ClientWrapper from '@/components/ClientWrapper';
import "../(main)/globals.css";

const AuthLayout = ({ children }) => {
    return (
        <html lang="en" className='h-full'>
            <body dir='rtl' className='h-full'>
                <ClientWrapper>
                    <div className='grid grid-cols-1 lg:grid-cols-3 h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                        <div className='lg:col-start-2 h-full w-full'>
                            {children}
                        </div>
                    </div>
                </ClientWrapper>
            </body>
        </html>
    );
};

export default AuthLayout;
