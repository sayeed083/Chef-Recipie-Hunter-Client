import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Register.css'

const Register = () => {

  const [regerror, setRegerror] = useState('')

  const { createUser, handleNamePhotoUrl } = useContext(AuthContext);


  const handleRegistration = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    


    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        handleNamePhotoUrl(createdUser, name, photo)
        console.log(createdUser);
        setRegerror('');
        event.target.reset();
      })
      .catch(error => {
        console.log(error.message);
        setRegerror(error.message);
      })

  }





  return (
    <div className='w-25 mx-auto my-5  border border-success rounded p-5'>
      <h2 className='text-center text-warning headline'>Please Register</h2>
      <Form onSubmit={handleRegistration}>

        {/* ------------------
                        Name Side               
                ------------------- */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your Name" required />


          {/* ------------------
                        Email Side               
                ------------------- */}



        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>


        {/* ------------------
                        Password Side               
                ------------------- */}


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>


        {/* ------------------
                        Alert Side               
                ------------------- */}

        <p className='text-danger'>{regerror}</p>



        {/* ------------------
                        Photo Side               
                ------------------- */}


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Your Photo URL" required />
        </Form.Group>



        {/* ------------------
                        Button Side               
                ------------------- */}


        <Button variant="warning" type="submit">
          Register
        </Button>


        <br />

        {/* ------------------
                        Other Sides               
                ------------------- */}


        <Form.Text className="text-success">
          Already Have an Account ? <Link className='text-decoration-none' to="/login">Login</Link>
        </Form.Text>
      </Form>

    </div>
  );
};

export default Register;