import React, { useState } from 'react';
import './QuizOption.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



const QuizOption = (props) => {

    const [right, setRight] = useState('');
    const [icon, setIcon] = useState(true);
    // const [ans, setAns] = useState({ correct: 0, wrong: 0 })
    // const [correct, setCorrect] = useState(0)
    const { option, number, rightAns, setDisabled, disabled } = props;

    // console.log( correctScore)

    const getAns = (option) => {
        setDisabled(true);
        if (rightAns === option) {
            setRight('active');
            // setAns({...ans,correct:ans.correct+1})
        }
        else {
            setRight('wrong');
        }

    }

    const showAll = (option) => {

        console.log(option)
        setIcon(!icon)
        if (option !== rightAns) {
            setRight('wrong');
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
            <span className='eye-icon' onClick={() => showAll(option)}><FontAwesomeIcon icon={icon ? faEye : faEyeSlash} /></span>
            <button className='quiz-options' disabled={disabled} onClick={() => getAns(option)} >
                <p className={`${right}`}><span className='quiz-alphabet'>{alphabet}</span> {option}</p>
            </button>
        </div>
    );
};

export default QuizOption;