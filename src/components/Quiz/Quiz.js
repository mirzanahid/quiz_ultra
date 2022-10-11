import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Quiz.css';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import { Container } from 'react-bootstrap';

const Quiz = () => {
    const quizzes = useLoaderData();
    const {name, questions } = quizzes.data;


   

    return (
        <div>
            <div className='quiz-bread'>
                <Container>
                    <p>Quiz Of <span>{name}</span></p>
                </Container>
            </div>

            <Container>
                <div className="quiz-container">
                    <div className="quiz-question-container">
                        {

                            questions.map((question, index) => <SingleQuiz key={question.id} question={question} number={index}></SingleQuiz>)
                        }
                    </div>
                    <div className="quiz-result-container">
                        <div className="quiz-res">
                            <h3 className='quiz-res-heading'>Quiz Results:</h3>
                            <p className='quiz-correct'>Correct Ans:</p>
                            <p className='quiz-wrong'>Wrong Ans:</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Quiz;