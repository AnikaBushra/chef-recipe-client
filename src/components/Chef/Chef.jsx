import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chefPicture, chefName, yearsOfExperience, numOfRecipes, likes } = chef;
    console.log(chef);
    return (
        <div className=' text-center border-2 border-black rounded-md  bg-gray-300'>
            <div>
                <img className='rounded-full w-52 h-52 border-8 border-green-800 mx-auto my-5' src={chefPicture} alt="chefImage" />
            </div>
            <div>
                <p className='text-2xl'>{chefName}</p>
                <p>{yearsOfExperience} Years of Experience</p>
                <div className='flex justify-evenly text-left'>
                    <p>{numOfRecipes} Recipes</p>
                    <p>{likes} likes</p>
                </div>

                <button className=' border-2 border-green-800 rounded-md m-4 p-2 hover:text-white hover:bg-gray-400'><Link>View recipe button</Link></button>
            </div>
        </div>
    );
};

export default Chef;