import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { user, login, loginWithGoogle, loginWithGigHub, logOut } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        setSuccess('');
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('User Logged successfully')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // sign in with google 
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                setSuccess('User Logged successfully')
                console.log(user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // sign In with git hub 
    const handleGithubLogin = () => {
        loginWithGigHub()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('User Logged successfully')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-gray-300 ">
                <div className="hero-content flex-col w-1/3">

                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div className="card  w-full  shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered"
                                        name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered"
                                        name='password' />
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <p className='text-green-500-500'>
                                    {success}
                                </p>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </form>
                            <div className="form-control mt-2">
                                <button onClick={handleGithubLogin} className="btn bg-white text-black"><FaGithub className='m-2'></FaGithub> Login with Github</button>
                            </div>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleLogin} className="btn "> <FaGoogle className='m-2 '></FaGoogle>Login with Google</button>
                            </div>

                            <label className="label">
                                <p >New to <span>Bon Appetit?</span><Link className=" text-xl text-violet-500" to={'/register'}>Register here.</Link></p>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;