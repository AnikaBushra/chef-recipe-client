import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gray-300 ">
                <div className="hero-content flex-col w-1/3">

                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className="card  w-full  shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered"
                                    name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    name='photoUrl' />
                            </div>
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

                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <label className="label">
                                <p >Already registered??<Link className=" text-xl text-violet-500" to={'/register'}>Login here.</Link></p>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;