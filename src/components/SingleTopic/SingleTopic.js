import React from 'react';
import { Link } from 'react-router-dom';

import './SingleTopic.css'

const SingleTopic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (


        <div className='single-topic'>
            <div className='single-topic-top'>
            <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='single-topic-info'>
                
                <h3 className='topic-heading'>{name}</h3>
                <p className='topic-quiz'>Total Quiz: {total}</p>
                <Link to={`quiz/${id}`}> <button className='topic-btn'>Start Quiz</button></Link>
            </div>
        </div>

    );
};

export default SingleTopic;