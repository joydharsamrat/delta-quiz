import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../QuizOptions/QuizOptions';

const Quiz = () => {
    const quizzes = useLoaderData();
    console.log(quizzes)
    return (
        <div className='text-white p-md-5'>
            <h1 className='text-center'>Quiz Of <span className='text-info'>{quizzes.data.name}</span></h1>
            {
                quizzes.data.questions.map(quiz => <QuizOptions key={quiz.id} quiz={quiz}></QuizOptions>)
            }

        </div>
    );
};

export default Quiz;