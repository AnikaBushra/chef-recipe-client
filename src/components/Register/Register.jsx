import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signUpUser, updateUser } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        setSuccess('')
        if (password.length < 6) {
            return setError('password can not be less than 6 characters')
        }
        signUpUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('User created successfully')
                form.reset();
                updateUser(name, photoUrl)
                    .then(() => {
                        // Profile updated!

                    }).catch((error) => {
                        setError(error.message)
                    });
            })
            .catch(error => {
                setError(error.message)
            })
        console.log(name, photoUrl, email, password);
    }


    return (
        <div>
            <div className="hero min-h-screen bg-gray-300 ">
                <div className="hero-content flex-col w-1/3">

                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className="card  w-full  shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" className="input input-bordered"
                                        name='name'
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered"
                                        name='photoUrl'
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered"
                                        name='email'
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered"
                                        name='password'
                                        required />

                                </div>
                                <p className='text-red-500'>{error}</p>
                                <p className='text-green-500-500'>
                                    {success}
                                </p>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <label className="label">
                                <p >Already registered??<Link className=" text-xl text-violet-500" to={'/login'}>Login here.</Link></p>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;