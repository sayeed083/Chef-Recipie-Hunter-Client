import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './ChefSideSingle.css'

const ChefSideSingle = ({chef}) => {
    const{id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes} = chef;
    return (
        <div className='my-4' >
            <Card >
      <Card.Img variant="top" className='chefImage' src={chefPicture} />
      <Card.Body>
        <Card.Title className='chefNames'>{chefName}</Card.Title>
        <Card.Text className='chefInfo'>
        Experience: {yearsOfExperience} Years
        </Card.Text>
        <Card.Text  className='chefInfo'> Numbers of recipes: {numberOfRecipes}
        </Card.Text>
        <Card.Text  className='chefInfo'>
        <FcLike></FcLike> Likes: {likes}
        </Card.Text>


        
        <Button variant="outline-info"> <Link className='text-decoration-none' to={`/viewrecipies/${id}`}> View Recipes</Link> </Button>
      </Card.Body>
    </Card>
              
        </div>
    );
};

export default ChefSideSingle;