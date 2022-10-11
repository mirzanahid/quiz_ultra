import React from 'react';
import Container from 'react-bootstrap/Container';
import QuizOption from '../QuizOption/QuizOption';
import './SingleQuiz.css'




const SingleQuiz = ({ question, number }) => {
    const options = question.options;
    const rightAns = question.correctAnswer;
    console.log(question)

    const getAns = (ans) => {
        if (ans) {
            const result = options.find(option => option);
            if (result === ans) {
                console.log('right')
            }

        }

    }



    const num = number;
    const indexToAlpha = (num = 1) => {
        const A = 'A'.charCodeAt(0);
        let numberToCharacter = number => {
            return String.fromCharCode(A + number);
        };
        return numberToCharacter(num);
    };
    const alphabet = indexToAlpha(num);
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
                            // options.map((option, idx) => <QuizOption key={idx} option={option} number={idx} handler={getAns}></QuizOption>)
                            options.map(option => {
                                <div className='quiz-options' onClick={() => getAns(option)} >

                                    <p><span className='quiz-alphabet'>{alphabet}</span> {option}</p>

                                </div>
                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleQuiz;