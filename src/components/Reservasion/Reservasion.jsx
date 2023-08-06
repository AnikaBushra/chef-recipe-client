import React from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const Reservasion = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleReservation = (e) => {
        e.preventDefault()
        const form = e.target;
        const first = form.first.value;
        console.log(name);
        // to do: data save on database 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/healthy-vegetables-kitchen_1303-12916.jpg?w=740&t=st=1691251508~exp=1691252108~hmac=bead0f73070dff428ffee5ab6256cad85c1a4471633e6107fc6b90c0df6238c4)' }}>

            <div className="hero-overlay bg-opacity-60 w-full mx-auto"></div>
            <div className="hero-content text-center text-black">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 ">

                            <div className="card-body">
                                <h1 className='text-2xl'>Reservation Form</h1>
                                <form action="" onSubmit={handleReservation}>
                                    <div className="form-control">
                                        <div className='flex my-2'>
                                            <input type="text" placeholder="First Name" className="input input-bordered"
                                                name='first' required />
                                            <input type="text" placeholder="Last Name" className="input input-bordered"
                                                name='second'
                                                required />
                                        </div>
                                        <input type="text" placeholder="Email" className="input input-bordered" required
                                            name='email' />
                                    </div>

                                    <div className="form-control">
                                        <input type="text" placeholder="Mobile Number" className="input input-bordered" required
                                            name='mobile' />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Select a date</span>
                                        </label>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                            className="input w-full input-bordered"
                                            required
                                            name='date'
                                        />

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-error">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservasion;