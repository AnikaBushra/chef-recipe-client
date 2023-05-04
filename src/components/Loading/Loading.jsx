import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className='bg-grey-200 h-96 text-9xl mt-10'>
            <div className=' flex justify-center align-middle'>

                <FaSpinner></FaSpinner>

            </div>
        </div>
    );
};

export default Loading;