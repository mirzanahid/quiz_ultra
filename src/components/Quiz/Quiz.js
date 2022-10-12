import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import { Col, Container, Row } from 'react-bootstrap';

const Quiz = () => {
    const quizzes = useLoaderData();
    const { name, questions, total } = quizzes.data;
    const [count, setCount] = useState({ correct: 0, wrong: 0 });
    console.log(count);
    return (
        <div>
            <div className='quiz-bread'>
                <Container>
                    <p>Quiz Of <span>{name}</span></p>
                </Container>
            </div>
            <div className="quiz-container">
                <Container>
                    <Row>
                        <Col xl='8' lg='8' >
                            <div className="quiz-question-container">
                                {
                                    questions.map((question, index) => <SingleQuiz 
                                    key={question.id} 
                                    question={question} 
                                    number={index}
                                    count={count}
                                    setCount={setCount}

                                    ></SingleQuiz>)
                                }
                            </div>
                        </Col>
                        <Col xl='4' lg='4'>
                            <div className="quiz-result-container">
                                <div className="quiz-res">
                                    <h3 className='quiz-res-heading'>Quiz Results:</h3>
                                    <p className='quiz-correct'>Total Quiz: {total}</p>
                                    <p className='quiz-correct quiz-corcetc-mid'>Correct Ans: {count.correct}</p>
                                    <p className='quiz-wrong'>Wrong Ans: {count.wrong}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Quiz;