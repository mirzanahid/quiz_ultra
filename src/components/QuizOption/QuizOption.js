import React, { useState } from 'react';
import './QuizOption.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = (props) => {
    const { option, number, rightAns, setDisabled, disabled, setCount, count } = props;
    const [right, setRight] = useState('');
    const getAns = (option) => {
        setDisabled(true);
        if (rightAns === option) {
            setCount({ ...count, correct: count.correct + 1 });
            setRight('active');
            toast.success('Your Ans. is Correct', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            setRight('wrong');
            setCount({ ...count, wrong: count.wrong + 1 });
            toast.error('Your Ans. is Wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const showAns = () => {
        toast.info(`Ans: ${rightAns}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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
            <span className='eye-icon' onClick={() => showAns()}><FontAwesomeIcon icon={faEye} /></span>
            <button className='quiz-options' disabled={disabled} onClick={() => getAns(option)} >
                <p className={`${right}`}><span className='quiz-alphabet'>{alphabet}</span> {option}</p>
            </button>
        </div>
    );
};

export default QuizOption;