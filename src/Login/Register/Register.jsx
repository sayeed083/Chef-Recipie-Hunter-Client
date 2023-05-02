import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

  const [regerror, setRegerror] = useState('')

    const {createUser} = useContext(AuthContext);


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
            console.log(createdUser);
            setRegerror('');
        })
        .catch(error => {
            console.log(error.message);
            setRegerror(error.message);
        })

    }





    return (
        <div className='w-25 mx-auto my-5'>
            <h2 className='text-center'>Please Register</h2>
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
      <p>{regerror}</p>



                {/* ------------------
                        Photo Side               
                ------------------- */}


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Your Photo URL" required />
      </Form.Group>


                    {/* ------------------
                        Check-Accept Side               
                ------------------- */}


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='accept' label="Accept Terms And Conditions" />
      </Form.Group>


                {/* ------------------
                        Button Side               
                ------------------- */}


      <Button variant="primary" type="submit">
        Register
      </Button>


      <br />

                {/* ------------------
                        Other Sides               
                ------------------- */}


      <Form.Text className="text-success">
          Already Have an Account ? <Link className='text-decoration-none' to="/login">Login</Link>
        </Form.Text>

                {/* ------------------
                        Alert Side               
                ------------------- */}

      <Form.Text className="text-success">
          
        </Form.Text>

      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>

        </div>
    );
};

export default Register;