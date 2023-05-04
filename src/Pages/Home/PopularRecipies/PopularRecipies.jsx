import React from 'react';
import './PopularRecipies.css'
import { FcLike } from "react-icons/fc";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating'

const PopularRecipies = () => {
    return (
        <div>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
            <h1 className='text-center popular-title text-warning'>Popular Recipies</h1>
                <img style={{ width: 80 }} src="https://i.postimg.cc/SRWNWhqW/restaurant.png" alt="" />
            </div>
            <div>
                {/* Recipie -1  */}
                <div className='border rounded popularContainer'>
                    <img className='popularRecipieImg' src="https://i.postimg.cc/gcVS0Q6Y/Ratatouille.jpg" alt="" />
                    <h2 className='popularRecipieName'>Ratatouille</h2>
                    <p className='popularRecipieDescription'>Ratings <Rating
                        placeholderRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    </p>

                    <p className='popularRecipieDescription'> <u>Description:</u> This classic French vegetable stew is made with eggplant, zucchini, bell peppers, onions, garlic, and tomatoes. The vegetables are sautéed in olive oil and then simmered in a tomato-based sauce until they are tender and fragrant. Ratatouille can be served as a side dish or a main course, and it is often accompanied by crusty bread or rice.</p>
                    <p className='popularRecipieDescription'>💜4000</p>

                </div>
                {/* Recipie -2  */}
                <div className='border rounded popularContainer'>
                    <img className='popularRecipieImg' src="https://i.postimg.cc/Hny7VwjR/Coq-au-Vin.jpg" alt="" />
                    <h2 className='popularRecipieName'>Coq au Vin</h2>
                    <p className='popularRecipieDescription'>Ratings <Rating
                        placeholderRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    </p>
                    <p className='popularRecipieDescription'> <u>Description:</u> This traditional French dish consists of chicken braised in red wine with bacon, mushrooms, onions, and garlic. It is typically served with mashed potatoes or crusty bread. Coq au Vin is a hearty and flavorful dish that is perfect for a cozy night in.</p>
                    <p className='popularRecipieDescription'>💜3884</p>

                </div>
                {/* Recipie -3  */}
                <div className='border rounded popularContainer'>
                    <img className='popularRecipieImg' src="https://i.postimg.cc/htf1V5hQ/Quiche-Lorraine.jpg" alt="" />
                    <h2 className='popularRecipieName'>Quiche Lorraine</h2>
                    <p className='popularRecipieDescription'>Ratings <Rating
                        placeholderRating={4}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    </p>
                    <p className='popularRecipieDescription'> <u>Description:</u> This savory tart is made with a buttery pastry crust filled with a mixture of eggs, cream, bacon, and cheese. Quiche Lorraine is typically served as a brunch or lunch dish and can be enjoyed hot or cold. It is a versatile dish that can be customized with different types of fillings, such as spinach, mushrooms, or ham.</p>
                    <p className='popularRecipieDescription'>💜2000</p>

                </div>







            </div>
        </div>
    );
};

export default PopularRecipies;