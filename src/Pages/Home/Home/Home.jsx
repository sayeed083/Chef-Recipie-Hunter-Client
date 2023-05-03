import React from "react";
import ChefSide from "../Chef/ChefSide/ChefSide";
import HomeBanner from "../HomeBanner/HomeBanner";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="d-flex gap-3 justify-content-center align-items-center my-3">
                <h1 className='text-center titleHome text-warning'>Taste The Food You Like</h1>
                <img style={{width:50}} src="/public/chef.png" alt="" />
            </div>
            <HomeBanner></HomeBanner>
            <ChefSide></ChefSide>
        </div>
    );
};

export default Home;