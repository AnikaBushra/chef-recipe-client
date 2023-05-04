import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chefPicture, chefName, yearsOfExperience, numOfRecipes, likes, id } = chef;

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

                <Link to={`/chefdata/${id}`}><button className=' border-2 border-green-800 rounded-md m-4 p-2 hover:text-white hover:bg-gray-400'>View recipe button</button></Link>
            </div>
        </div>
    );
};

export default Chef;