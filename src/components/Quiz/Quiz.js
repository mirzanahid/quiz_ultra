import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizes = useLoaderData();

    console.log(quizes)
    return (
        <div>
            <h1>this is quiz page</h1>
        </div>
    );
};

export default Quiz;