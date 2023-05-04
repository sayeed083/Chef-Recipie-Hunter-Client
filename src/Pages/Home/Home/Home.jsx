import React from "react";
import ChefSide from "../Chef/ChefSide/ChefSide";
import FoodCategories from "../FoodCategories/FoodCategories";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularRecipies from "../PopularRecipies/PopularRecipies";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="d-flex gap-3 justify-content-center align-items-center my-3">
                <h1 className='text-center titleHome text-warning'>Taste The Food You Like</h1>
                <img style={{width:50}} src="https://i.postimg.cc/nLVqXHL4/chef.png" alt="" />
            </div>
            <HomeBanner></HomeBanner>
            <ChefSide></ChefSide>
            <FoodCategories></FoodCategories>
            <PopularRecipies></PopularRecipies>
            
        </div>
    );
};

export default Home;