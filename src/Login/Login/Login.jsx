import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-25 mx-auto my-5'>
            <h2 className='text-center'>Please Log In</h2>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-success">
          Don't Have an Account ? <Link className='text-decoration-none' to="/register">Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
          
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>

        </div>
    );
};

export default Login;