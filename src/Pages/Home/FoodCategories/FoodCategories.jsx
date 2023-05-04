import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './FoodCategories.css'

const FoodCategories = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center category-title text-warning'>Food Categories</h1>
            <div className=' row row-cols-1 row-cols-md-3 gap-5 m-0'>

                {/* Food Category Starts  */}

                <div className='category-container'>
                    <img className='categoryimg' src="https://i.postimg.cc/GmxQkvmy/breakfast-2.jpg" alt="" />
                    <h1 className=' cat-title'>Breakfast</h1>
                     </div>
                <div className='category-container'>
                    <img className='categoryimg' src="https://i.postimg.cc/sDp9r5SN/dinner.jpg" alt="" />
                    <h1 className=' cat-title'>Dinner</h1>
                     </div>
                <div className='category-container'>
                    <img className='categoryimg' src="https://i.postimg.cc/L8xP9DsN/salad-2.jpg" alt="" />
                    <h1 className=' cat-title'>Salad</h1>
                     </div>
                <div className='category-container'>
                    <img className='categoryimg' src="https://i.postimg.cc/9QG94CgL/Drinks.jpg" alt="" />
                    <h1 className=' cat-title'>Drinks</h1>
                     </div>

            </div>
            
        </div>
    );
};

export default FoodCategories;