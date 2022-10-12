import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';
import './SingleQuiz.css'


const SingleQuiz = ({ question, number }) => {
    const options = question.options;
    const rightAns = question.correctAnswer;
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <Container>
                <div className='single-quiz-container'>
                    <div className='questions-container'>
                        <span className='quiz-numbers'>Quiz-{number + 1}:</span>
                        <p className='quiz-que'>{question.question}</p>
                    </div>
                    <div >
                        {
                            options.map((option, idx) => <QuizOption
                                key={idx}
                                option={option}
                                number={idx}
                                rightAns={rightAns}
                                disabled={disabled}
                                setDisabled={setDisabled}></QuizOption>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleQuiz;