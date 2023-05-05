import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Blogs.css'
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import { FaPrint } from "react-icons/fa";

const Blogs = () => {
  const ref = useRef()
  return (
    <div>
      <div ref={ref}>
        <h2 className='text-center blog-title'>Blog</h2>
        <div className='text-center'>
        <ReactToPrint trigger={() => <Button variant="outline-success"><FaPrint></FaPrint></Button>} content={() => ref.current}></ReactToPrint>
      </div>

        <Row xs={1} md={2} className="g-4 m-5">

          {/* Question 1 */}
          <Col>
            <Card className='bg-info'>
              <Card.Body>
                <Card.Title>1. Tell us the differences between uncontrolled and controlled components.</Card.Title>
                <Card.Text>
                  The main difference between uncontrolled and controlled components is that uncontrolled components manage their own state internally, while controlled components rely on external state management mechanisms to manage their state. Controlled components are generally more flexible and can be used to implement more complex UI elements, but they require more setup and may be less intuitive for simple use cases.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Question 2 */}
          <Col>
            <Card className='bg-warning'>
              <Card.Body>
                <Card.Title>2. How to validate React props using PropTypes</Card.Title>
                <Card.Text>
                  PropTypes is a utility library that is used to validate the props of a component in React. To use PropTypes in your React component, you'll <br /> first need to import it from the 'prop-types' package. Once you've imported PropTypes, you can define the expected props for your component using the 'propTypes' static property.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>


          {/* Question 3 */}
          <Col>
            <Card className='bg-success'>
              <Card.Body>
                <Card.Title>3. Tell us the difference between nodejs and express js.</Card.Title>
                <Card.Text>
                  Node.js is a runtime environment that allows developers to execute JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications by providing a set of tools and utilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>



          {/* Question 4 */}
          <Col>
            <Card className='bg-info'>
              <Card.Body>
                <Card.Title>4. What is a custom hook, and why will you create a custom hook?</Card.Title>
                <Card.Text>
                  A Custom hook is a JavaScript function that allows you to reuse logic and stateful behavior across different components.
                  Custom hooks in React allow developers to reuse stateful logic across different components without having to use higher-order components or render props. By creating a custom hook, developers can encapsulate complex logic into a single function that can be easily imported and used across multiple components.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>


      

    </div>
  );
};

export default Blogs;