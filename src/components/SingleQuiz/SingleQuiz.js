import React from 'react';
import Container from 'react-bootstrap/Container';
import QuizOption from '../QuizOption/QuizOption';
import './SingleQuiz.css'




const SingleQuiz = ({ question, number }) => {
    const options = question.options

    // console.log( question.question)




    //  console.log(questions.options)


    return (
        <div>
            <Container>
                <div className='single-quiz-container'>
                    <div className="quiz-questions">
                        <span className='quiz-numbers'>Quiz-{number+1}:</span>
                        <p className='quiz-que'>{question.question}</p>
                     
                       <div >
                       {
                            options.map((option, idx) => <QuizOption key={idx} option={option} number={idx} ></QuizOption>)
                        }
                       </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleQuiz;