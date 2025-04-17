import React from 'react';

const UserPanelLayout = ({ children, wallet, course, comment }) => {
    const role = 'admin';
    return (
        <div className='h-full w-full p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                {role === 'user' ? (
                    <>
                        <div className='bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white text-center' dir='ltr'>
                            {wallet}
                        </div>
                        <div className='bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white text-center' dir='ltr'>
                            {course}
                        </div>
                    </>
                ) : (
                    <div className='lg:col-span-2 bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white text-center' dir='ltr'>
                        {comment}
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};

export default UserPanelLayout;
