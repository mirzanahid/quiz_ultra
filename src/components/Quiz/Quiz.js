import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Quiz.css';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import { Container } from 'react-bootstrap';

const Quiz = () => {
    const quizzes = useLoaderData();
    const {id, name, questions} = quizzes.data;
  
    return (
        <div>
            <div className='quiz-bread'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Topics</Breadcrumb.Item>
                    <Breadcrumb.Item href="/Quiz">
                        Quiz
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </div>
         <Container>
         <div className="quiz-container">
            <div className="quiz-question-container">
            {
           
           questions.map((question, index) => <SingleQuiz key={question.id}  question={question} number={index}></SingleQuiz>)
          }
            </div>
            <div className="quiz-result-container">
                <div className="quiz-resl">
                    <h3>Quiz Result</h3>
                    <p>Correct Ans:</p>
                    <p>Wrong Ans:</p>
                </div>
            </div>
          </div>
         </Container>
        </div>
    );
};

export default Quiz;