import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const logOutt = () => {
        logOut().then().catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='header-bg h-28  bg-gray-400 bg-blend-multiply'>
            <div className="navbar flex justify-between text-white text-lg">
                <div>
                    <h2 className="btn btn-ghost normal-case text-5xl web-name tracking-widest font-thin">Bon Appetit</h2>
                </div>
                <div className=" ">
                    <NavLink className={({ isActive }) => isActive ? 'text-green-500 p-4' : 'text-white p-4'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-green-500 p-4' : 'text-white p-4'} to='/blog'>Blog</NavLink>

                </div>
                <div>
                    {
                        user ? <><img title={user.displayName} className='w-10 rounded-full' src={user.photoURL}></img>
                            <Link className='px-4' onClick={logOutt} >Log Out</Link></> : <NavLink className={({ isActive }) => isActive ? 'text-green-500 p-4' : 'text-white p-4'} to='/login'>Login</NavLink>

                    }
                </div>

            </div>
        </div>
    );
};

export default Header;