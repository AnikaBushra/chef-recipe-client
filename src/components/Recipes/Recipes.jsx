import React from 'react';

const Recipes = ({ recipe }) => {
    const { name, ingredients, rating, image, directions } = recipe;
    return (
        <div className='  w-3/4 mx-auto my-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="foodimg" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-left'>Ingredients: {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}</p>
                    <p className='text-xl text-bold '>Recipe</p>
                    <p>{directions}</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;