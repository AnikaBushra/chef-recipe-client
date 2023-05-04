import React, { useEffect, useState } from 'react';
import './Home.css'


import Chef from '../Chef/Chef';
import Loading from '../Loading/Loading';



const Home = () => {
    const [isLoading, setLoading] = useState(true)
    const [chefdata, setChefdata] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-chef-recipe-server-anikabushra.vercel.app/chefdata')
            .then(res => res.json())
            .then(data => setChefdata(data))
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <div className='banner min-h-screen  bg-gray-400 bg-blend-multiply'>
                <div className='flex flex-col text-left w-1/2 py-20'>
                    <div className="btn btn-ghost normal-case text-4xl  text-white font-md mb-6">Bon Appetit</div>
                    <p className="btn btn-ghost normal-case text-3xl  text-white font-thin">for home cooks who are hungry for something good. find thousandes of tested recipes</p></div>
            </div>
            <div className=' bg-gray-200 text-center py-6'>
                <p className='text-5xl'>Our chefs</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-20 chef-card mx-auto' >

                    {
                        chefdata.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;