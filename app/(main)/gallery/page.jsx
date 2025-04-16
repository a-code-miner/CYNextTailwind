import React from 'react';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='grid col-start-2'>
                {[...Array(32).keys()].map(num => (
                    <div key={num} className='w-full h-full my-5 rounded-2xl overflow-hidden relative'>
                        {/* <img src={`assets/images/a${num + 1}.jpg`} alt="Images" width={1200} height={2400} className='min-w-full min-h-full object-cover' /> */}
                        <Image
                            // src={`/assets/images/a${num + 1}.jpg`}
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Landscapereflection.jpg/250px-Landscapereflection.jpg'}
                            alt='Favorite images...'
                            width={100}
                            height={250}
                            className='min-w-full min-h-full object-cover'
                            placeholder='blur'
                            blurDataURL='/assets/images/loader.svg'
                            loading='lazy'
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
