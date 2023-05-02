import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const logOutt = () => {
        logOut().then().catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='header-bg h-28  bg-gray-400 bg-blend-multiply'>
            <div className="navbar flex justify-between text-white text-lg">
                <div>
                    <a className="btn btn-ghost normal-case text-5xl web-name tracking-widest font-thin">Bon Appetit</a>
                </div>
                <div className="">
                    <Link className='px-4' to='/'>Home</Link>
                    <Link className='px-4' to='/blog'>Blog</Link>

                </div>
                <div className="">
                    {
                        user ? <><img title={user.displayName} className='w-10 rounded-full' src={user.photoURL}></img>
                            <Link className='px-4' onClick={logOutt} >Log Out</Link></> : <Link className='px-4' to='/login'>Login</Link>

                    }
                </div>

            </div>
        </div>
    );
};

export default Header;