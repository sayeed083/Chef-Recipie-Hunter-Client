import React from "react";
import ChefSide from "../Chef/ChefSide/ChefSide";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <div className="d-flex gap-3 justify-content-center align-items-center text-warning my-3">
                <h1 className='text-center'>Taste The Food You Like</h1>
                <img style={{width:50}} src="/public/chef.png" alt="" />
            </div>
            <HomeBanner></HomeBanner>
            <ChefSide></ChefSide>
        </div>
    );
};

export default Home;