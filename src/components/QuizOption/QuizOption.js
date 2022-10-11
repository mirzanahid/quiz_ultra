import React from 'react';
import './QuizOption.css'

const QuizOption = ({ option, number }) => {

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
        <div className='quiz-options'>
            
            <p><span className='quiz-alphabet'>{alphabet}</span> {option}</p>

        </div>
    );
};

export default QuizOption;