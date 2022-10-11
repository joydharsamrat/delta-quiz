import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCategories from '../QuizCategories/QuizCategories';
import './Home.css';

const Home = () => {
    const quizzes = useLoaderData();

    return (
        <div >

            <div className='top-banner'>
                <h1>Unlocking knowledge</h1>
                <h1> at the speed of thought</h1>
            </div >

            <div className='home' >
                {
                    quizzes.data.map(quiz => <QuizCategories key={quiz.id} quiz={quiz}></QuizCategories>)
                }
            </div>
        </div>
    );
};

export default Home;