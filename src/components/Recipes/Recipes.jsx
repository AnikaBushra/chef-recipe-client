import React, { useState } from 'react';
import { GrFavorite } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {
    const [favourite, setFavourite] = useState(false)
    const { name, ingredients, rating, image, directions } = recipe;

    const handleFavourite = () => {
        toast("Recipe added to favourite");
        setFavourite(true)
        console.log('clicked');
    }
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="foodimg" /></figure>
                <div className="card-body text-left w-3/4">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-left'>Ingredients: {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}</p>
                    <p className='text-xl text-bold '>Recipe</p>
                    <p>{directions}</p>
                    <div className="card-actions justify-end">
                        <p>rating: {rating}</p>
                        <button className={`bg-green-600 border-2 p-2 rounded-md text-white ${favourite && 'bg-green-300'}`} onClick={handleFavourite} disabled={favourite && true}>Add to Favoutite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;