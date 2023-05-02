import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const [logerror, setLogerror] = useState('')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/')
            setLogerror('')
        })
        .catch(error => {
            console.log(error.message);
            setLogerror(error.message);
        })
    }


    return (
        <div className='w-25 mx-auto my-5'>
            <h2 className='text-center'>Please Log In</h2>


            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <p className='text-danger'>{logerror}</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-success">
          Don't Have an Account ? <Link className='text-decoration-none' to="/register">Register</Link>
        </Form.Text>
    </Form>

      

        </div>
    );
};

export default Login;