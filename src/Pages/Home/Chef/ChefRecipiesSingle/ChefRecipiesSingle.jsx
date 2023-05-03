import React from 'react';
import { FcChargeBattery } from 'react-icons/fc';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating'

const ChefRecipiesSingle = ({rec}) => {
    const {recipeName, ingredients, cookingMethod, rating} = rec
    return (
        <div>
            <div>
            <h2 className='bg-danger'>{recipeName}</h2>
            <h2 className='bg-info'>{ingredients[1]}</h2>
            <h2 className='bg-warning'>{cookingMethod}</h2>
            <h2 className='bg-primary mb-5'>
                <Rating
                 placeholderRating={rating}
                 readonly
                 emptySymbol={<FaRegStar></FaRegStar>}
                 placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                 fullSymbol={<FaStar></FaStar>}
                ></Rating>
                {rating}</h2>
            </div>
            
        </div>
    );
};

export default ChefRecipiesSingle;