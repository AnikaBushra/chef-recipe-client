import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const SingleChef = () => {
    const data = useLoaderData();


    const { chefPicture, chefName, yearsOfExperience, numOfRecipes, likes, id, chefBio, recipes } = data;




    return (
        <div className='text-center'>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-base-100  my-20  text-green-700 p-6 m-10 gap-4">
                <figure><img className='w-full' src={chefPicture} alt="chefImg" /></figure>
                <div className='text-left'>

                    <div>
                        <h2 className=" text-3xl">{chefName}</h2>
                        <p>{chefBio}</p>

                    </div>
                    <div className='flex justify-between align-middle  my-10 py-10'>
                        <div className=' text-xl'>Years of Experience : {yearsOfExperience}</div>
                        <div >
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