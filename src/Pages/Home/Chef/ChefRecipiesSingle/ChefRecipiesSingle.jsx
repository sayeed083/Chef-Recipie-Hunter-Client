import React from 'react';
import { FcLike } from "react-icons/fc";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating'
import { Button, Card } from 'react-bootstrap';
import './ChefRecipiesSingle.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const ChefRecipiesSingle = ({ rec }) => {
    const { recipeName, ingredients, cookingMethod, rating } = rec


    const [disabledButton, setDisabledButton] = useState(false)

    const handleFavourite = () => {
        setDisabledButton(true)
        toast('Added To Favourites 💜', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }


    return (
        <div>

            <Card style={{ width: '35rem', height: '40rem' }} className='mb-5 me-5 ms-4'>
                <Card.Body>
                    <Card.Title className='title'>{recipeName}</Card.Title>
                    <hr />
                    <Card.Text>
                        <span className='ingredientsSide'> Ingredients:</span> <ol className='text-danger ingredients text-center list-unstyled'>
                            <li>{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li>{ingredients[2]}</li>
                            <li>{ingredients[3]}</li>
                            <li>{ingredients[4]}</li>
                        </ol>

                    </Card.Text>
                    <Card.Text className='info'>
                        <u>Cooking Method</u>: {cookingMethod}

                    </Card.Text>
                    <Card.Text>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>  {rating}

                    </Card.Text>
                    <Button onClick={handleFavourite} disabled ={disabledButton} variant="outline-danger">Add to Favourites <FcLike></FcLike> </Button>
                    
                </Card.Body>
            </Card>
            
            

        </div>
    );
};

export default ChefRecipiesSingle;