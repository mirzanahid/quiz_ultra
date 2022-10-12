import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="error-container">
            <div className='error-page-container'>
                <h2 className='error-number'>404</h2>
                <p className='error-text'>Page not found!</p>
                <p className='error-message'>The page your are looking for does not seem to exist.</p>
                <Link to={'/'}><button className='error-go-home-btn'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;