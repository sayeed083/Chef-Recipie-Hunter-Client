import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import './ChefRecipies.css'

const ChefRecipies = () => {
    const {rId} = useParams()
    const viewrecipies = useLoaderData();

    console.log(viewrecipies);
    const [recipes, setRecipies] = useState([])

    // const {chefName} =recipes


    useEffect ( () => {
        const recipieDetails = viewrecipies.find((recipe) => recipe.id == parseInt (rId) );
        console.log(recipieDetails);
        setRecipies(recipieDetails)
    })

    return (
        <div>

            <div className='border rounded conainsMargin p-5'>
            <img src={recipes.chefPicture} alt="" />
            <h2 className='chefName'> {recipes.chefName} </h2>
            <p className='chefInfo'>{recipes.bio}</p>
            <p className='chefInfo'>Likes: {recipes.likes}<FcLike></FcLike></p>
            <p className='chefInfo'>Numbers of recipes: {recipes.numberOfRecipes}</p>
            <p className='chefInfo'>Experience: {recipes.yearsOfExperience}</p>
            </div>
            

        </div>
    );
};

export default ChefRecipies;