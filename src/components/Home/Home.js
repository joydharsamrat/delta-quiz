import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCategories from '../QuizCategories/QuizCategories';
import './Home.css';

const Home = () => {
    const quizzes = useLoaderData();

    return (
        <div className='home'>
            {
                quizzes.data.map(quiz => <QuizCategories key={quiz.id} quiz={quiz}></QuizCategories>)
            }
        </div>
    );
};

export default Home;