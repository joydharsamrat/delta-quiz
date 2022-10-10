import React from 'react';
import './QuizOptions.css';

const QuizOptions = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz
    return (
        <div className='m-5 border border-secondary rounded p-2 text-center'>
            <h1 className='m-3'>Question : {question}</h1>
            <div className='options-container'>
                {
                    options.map((option, idx) => <p className='border'> <label htmlFor={question.id}><input type="radio" name="option" id={question.id} />{option}</label></p>)
                }
            </div>
        </div>
    );
};

export default QuizOptions;