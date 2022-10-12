import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='quiz-bread blog-top'>
                <Container>
                    <p>Question And Answer</p>
                </Container>
            </div>

            <Container>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='blog-accor-header'>01: What is the purpose of a react router?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                React Router is mainly use for define multiple routes in the single page application. When a user
                                typed a specific url and if the url matched with the route which is defined in the react router it will  re-direct to particular route
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>02: How does context api work?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Data is delivered top-down in a React application via props, however its usage may be problematic for certain types of attributes that are required by various application components. To move data throughout the component tree, context gives an alternative to manually passing props down at every level.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>03: What is useRef and how does it work? </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                UseRef is one of the common hooks that React provides. A mutable ref object with the provided argument initialized in its current property is what this method produces. For the duration of the component lifecycle, the returned object will stay persistent. The two main applications of useRef are accessing DOM nodes or React components and maintaining mutable variables.
                            </p>

                            <p>
                                using the DOM or React components
                                In general, we want to give React complete control over any DOM manipulation. However, there are some circumstances in which using UseRef is not problematic. In React, we may add the ref attribute to an element to directly access it in the DOM.
                            </p>

                            <p>
                                maintaining mutable variables
                                UseRef(initialValue), a built-in React hook, takes one argument as its initial value and returns a reference. a thing
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Blog;