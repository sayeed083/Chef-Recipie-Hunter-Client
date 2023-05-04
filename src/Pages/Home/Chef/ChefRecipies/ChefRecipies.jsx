import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRecipies.css'
import ChefRecipiesSingle from '../ChefRecipiesSingle/ChefRecipiesSingle';
import { FaRegThumbsUp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipies = () => {
    const { rId } = useParams()
    const viewrecipies = useLoaderData();

    const [recipes, setRecipies] = useState([])
    const [singleRecipe, setSingleRecipe] = useState([])

    // const {chefName} =recipes


    useEffect(() => {
        const recipieDetails = viewrecipies.find((recipe) => recipe.id == parseInt(rId));
        // console.log(recipieDetails);
        setRecipies(recipieDetails)
        setSingleRecipe(recipieDetails.recipe)



    })
    console.log(singleRecipe);

    return (
        <div>

            <div className='border rounded conainsMargin p-5'>
                <img src={recipes.chefPicture} alt="" />
                <h2 className='chefName'> {recipes.chefName} </h2>
                <p className='chefInfo'>{recipes.bio}</p>
                <p className='chefInfo'>Likes: {recipes.likes} <FaRegThumbsUp></FaRegThumbsUp> </p>
                <p className='chefInfo'>Numbers of recipes: {recipes.numberOfRecipes}</p>
                <p className='chefInfo'>Experience: {recipes.yearsOfExperience}</p>
            </div>

            <div>
                <h1 className='text-center t-title'> <u>Some of Top Recipies</u></h1>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 m-0'>
                {
                    singleRecipe.map(rec =>
                        <ChefRecipiesSingle
                            key={rec.id}
                            rec={rec}
                        >

                        </ChefRecipiesSingle>

                    )
                }

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

            </div>


        </div>
    );
};

export default ChefRecipies;