import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
            <h2>This is Chef Recipies: {recipes.chefName} </h2>
            
        </div>
    );
};

export default ChefRecipies;