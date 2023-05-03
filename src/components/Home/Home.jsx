import React from 'react';
import './Home.css'
import { TbToolsKitchen } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';





const Home = () => {
    const chefdata = useLoaderData()
    console.log(chefdata);

    return (

        <div>
            <div className='banner min-h-screen  bg-gray-400 bg-blend-multiply'>
                <div className='flex flex-col text-left w-1/2 py-20'>
                    <div className="btn btn-ghost normal-case text-4xl  text-white font-md mb-6">Bon Appetit</div>
                    <p className="btn btn-ghost normal-case text-3xl  text-white font-thin">for home cooks who are hungry for something good. find thousandes of tested recipes</p></div>
            </div>
            <div className=' bg-gray-200 text-center py-6'>
                <p className='text-5xl'>Our chef</p>
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