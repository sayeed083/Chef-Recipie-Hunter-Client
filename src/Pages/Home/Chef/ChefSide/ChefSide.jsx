import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChefSideSingle from '../ChefSideSingle/ChefSideSingle';

const ChefSide = () => {

    // Using State 
    const [chefs, setChefs] = useState([]);


    // Using Effect 

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then (data => setChefs(data))
        .catch(error => console.error(error))
    },[])









    return (
        <div>
            <h2>Chefs are here {chefs.length} </h2>
            
            <div className='row row-cols-1 row-cols-md-2 g-4 m-0'>
            {
                chefs.map(chef => 
                    <ChefSideSingle
                    key={chef.id}
                    chef={chef}
                    
                    >

                    </ChefSideSingle>
                    )
            }
            </div>
            
        </div>
    );
};

export default ChefSide;