import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
import { FaDoorOpen } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div>
            <img className='full-image' src="https://i.postimg.cc/Sxc73TnP/bg2.jpg" alt="" />
            
            <div className='centered  text-white '>
                <h1 className='text-center text-danger mb-2 error-name'>Error 404</h1>
                <h1 className='text-center e-title text-primary'>OOPS !</h1>
                <h1 className='text-center mb-5  text-primary'>Nothing Here...</h1>
                <p className='describe'>Either Something Get Wrong or the Page Dosen't Exist Anymore.</p>
                <div className='text-center'>
                <Button  variant="outline-info"><Link className='text-decoration-none' to="/"> 
                <FaDoorOpen className='me-2'></FaDoorOpen>
                Back To Home</Link> </Button>
                </div>
                
               

            </div>
        </div>
    );
};

export default ErrorPage;