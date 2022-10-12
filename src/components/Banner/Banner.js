import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col xl='6' md='6'>
                        <div className="banner-text">
                            <span className='banner-top-text'>Best quizzes</span>
                            <h1 className='banner-heading'>Quiz Ultra makes  <br /> you Confidant </h1>
                            <p className='banner-paragraph'>Test your self and prepare for the best</p>
                        </div>
                    </Col>
                    <Col xl='6' md='6'>
                        <div className="banner-image">
                            <img src="banner.png" alt="" />
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Banner;