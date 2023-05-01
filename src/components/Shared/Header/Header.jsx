import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar flex justify-between text-white text-lg">
                <div>
                    <a className="btn btn-ghost normal-case text-5xl web-name tracking-widest font-thin">Bon Appetit</a>
                </div>
                <div className="">
                    <Link className='px-4' to='/'>Home</Link>
                    <Link className='px-4' to='/blog'>Blog</Link>

                </div>
                <div className="">
                    <Link className='px-4' to='/login'>Login</Link>
                    <p className='px-4'>User</p>
                </div>

            </div>
        </div>
    );
};

export default Header;