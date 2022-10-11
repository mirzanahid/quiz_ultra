import React from 'react';
import { Link } from 'react-router-dom';

import './SingleTopic.css'

const SingleTopic = ({topic}) => {
    const {id,logo, name, total} = topic;
    return (
     
 
        <div className='single-topic'>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
         
            <h3 className='topic-heading'>{name}</h3>
            <p className='topic-quiz'>Quiz:{total}</p>
           <Link to={`quiz/${id}`}> <button className='topic-btn'>Start Quiz</button></Link>
        </div>
     
    );
};

export default SingleTopic;