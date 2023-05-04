import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const SingleChef = () => {
    const data = useLoaderData();
    const { chefPicture, chefName, yearsOfExperience, numOfRecipes, likes, id, chefBio, recipes } = data;
    console.log(data);
    return (
        <div className='text-center'>
            <div className="card bg-base-100 shadow-xl my-20 border-2 text-green-700  w-2/3 mx-auto">
                <figure><img className='w-full' src={chefPicture} alt="chefImg" /></figure>
                <div className="card-body">

                    <div>
                        <h2 className="card-title text-2xl ">{chefName}</h2>
                        <p>{chefBio}</p>

                    </div>
                    <div className='flex justify-between align-middle  '>
                        <div className=' text-xl'>Years of Experience : {yearsOfExperience}</div>
                        <div>
                            <p>Likes:{likes}</p>
                            <p>Numbers of recipes:{numOfRecipes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>Selected recipes from this chef</h2>
            {
                recipes.map((recipe, idx) => <Recipes
                    key={idx}
                    recipe={recipe}
                ></Recipes>)
            }
        </div>
    );
};

export default SingleChef;