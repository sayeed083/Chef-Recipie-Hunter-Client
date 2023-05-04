import React from 'react';
import './PopularRecipies.css'

const PopularRecipies = () => {
    return (
        <div>
            <h1 className='text-center popular-title text-warning'>Popular Recipies</h1>
            <div>
                {/* Recipie -1  */}
                <div className='border rounded popularContainer'>
                    <img className='popularRecipieImg' src="https://i.postimg.cc/gcVS0Q6Y/Ratatouille.jpg" alt="" />
                    <h2 className='popularRecipieName'>Ratatouille</h2>
                    <p>Ratings</p>
                    <p className='popularRecipieDescription'>Description: This classic French vegetable stew is made with eggplant, zucchini, bell peppers, onions, garlic, and tomatoes. The vegetables are sautéed in olive oil and then simmered in a tomato-based sauce until they are tender and fragrant. Ratatouille can be served as a side dish or a main course, and it is often accompanied by crusty bread or rice.</p>
                    <p>Likes</p>

                </div>
                {/* Recipie -2  */}
                <div className='border rounded popularContainer'>
                    <img className='popularRecipieImg' src="https://i.postimg.cc/Hny7VwjR/Coq-au-Vin.jpg" alt="" />
                    <h2 className='popularRecipieName'>Coq au Vin</h2>
                    <p>Ratings</p>
                    <p className='popularRecipieDescription'>Description: This traditional French dish consists of chicken braised in red wine with bacon, mushrooms, onions, and garlic. It is typically served with mashed potatoes or crusty bread. Coq au Vin is a hearty and flavorful dish that is perfect for a cozy night in.</p>
                    <p>Likes</p>

                </div>
                {/* Recipie -3  */}
                <div className='border rounded popularContainer'>
                    <img className='popularRecipieImg' src="https://i.postimg.cc/htf1V5hQ/Quiche-Lorraine.jpg" alt="" />
                    <h2 className='popularRecipieName'>Quiche Lorraine</h2>
                    <p>Ratings</p>
                    <p className='popularRecipieDescription'>Description: This savory tart is made with a buttery pastry crust filled with a mixture of eggs, cream, bacon, and cheese. Quiche Lorraine is typically served as a brunch or lunch dish and can be enjoyed hot or cold. It is a versatile dish that can be customized with different types of fillings, such as spinach, mushrooms, or ham.</p>
                    <p>Likes</p>

                </div>







            </div>
        </div>
    );
};

export default PopularRecipies;