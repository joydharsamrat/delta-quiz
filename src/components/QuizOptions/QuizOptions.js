import React from 'react';
import Options from '../Options/Options';
import './QuizOptions.css'

const QuizOptions = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz
    return (
        <div className='m-5 border border-secondary rounded p-2'>
            <h1 className='m-3'>Question : {question}</h1>
            <div className='options-container'>
                {
                    options.map((option, idx) => <Options key={idx} option={option}></Options>)
                }
            </div>
        </div>
    );
};

export default QuizOptions;