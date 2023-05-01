import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className='text-center h-36 py-10 bg-black text-white'>

            <h3>
                Contact us on
            </h3>
            <div className='flex justify-center'>
                <FaFacebook className='m-4'></FaFacebook>
                <FaTwitter className='m-4'></FaTwitter>
                <FaYoutube className='m-4'></FaYoutube>
            </div>

            &copy; All rights reserved.
        </div>
    );
};

export default Footer;