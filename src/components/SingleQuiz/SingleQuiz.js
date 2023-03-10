import React, { useState } from 'react';
import QuizOption from '../QuizOption/QuizOption';
import './SingleQuiz.css'


const SingleQuiz = ({ question, number, count, setCount }) => {
    const options = question.options;
    const rightAns = question.correctAnswer;
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
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
                            setDisabled={setDisabled}
                            setCount={setCount}
                            count={count}></QuizOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;