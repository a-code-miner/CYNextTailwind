import React from 'react';
import Link from 'next/link';

const CourseSlot = () => {
    return (
        <>
            <div>CourseSlot...</div>
            <Link className='text-blue-600' href={'/userpanel/finished'}>Finished Courses</Link>
        </>
    );
};

export default CourseSlot;
