import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChefSideSingle from '../ChefSideSingle/ChefSideSingle';
import './ChefSide.css'
import Spinner from 'react-bootstrap/Spinner';

const ChefSide = () => {

    // Using State 
    const [chefs, setChefs] = useState([]);
    //State For Spinner
    const [loader, setLoader] = useState(true)




    // Using Effect 

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setLoader(false)
            })
            .catch(error => console.error(error))
    }, [])









    return (
        <div>
            <div className='d-flex gap-3 justify-content-center align-items-center my-3'>
            <h2 className='text-center title text-warning'>Top Chef's</h2>
            <img style={{width:80}} src="https://i.postimg.cc/ryWm6SWK/chef-1.png" alt="" />
            </div>

            <div className='row row-cols-1 row-cols-md-2 g-4 m-0'>

                {loader ? <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :

                    chefs.map(chef =>
                        <ChefSideSingle
                            key={chef.id}
                            chef={chef}>
                        </ChefSideSingle>
                    )
                }
            </div>

        </div>
    );
};

export default ChefSide;