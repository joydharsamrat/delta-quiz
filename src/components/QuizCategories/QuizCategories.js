import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './QuizCategories.css';
import { Link } from 'react-router-dom';

const QuizCategories = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='catagories-container'>
            <img src={logo} alt="" />
            <div className="info">
                <h2 className='category-name'>{name}</h2>
                <p className='fs-5'>{total} questions</p>
            </div>
            <Link className='start-btn' to={`/quiz/${id}`}>Start Practice</Link>
        </div >
    );
};

export default QuizCategories;