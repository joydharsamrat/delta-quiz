import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../QuizOptions/QuizOptions';

const Quiz = () => {
    const quizzes = useLoaderData();
    return (
        <div className='text-white p-5'>

            {
                quizzes.data.questions.map(quiz => <QuizOptions key={quiz.id} quiz={quiz}></QuizOptions>)
            }
        </div>
    );
};

export default Quiz;