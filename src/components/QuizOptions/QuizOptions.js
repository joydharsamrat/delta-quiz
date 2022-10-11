import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './QuizOptions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOptions = ({ quiz }) => {

    const { question, options, correctAnswer } = quiz;

    const correctAns = () => toast(`${correctAnswer}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })

    const notify = (answer) => {
        let selectedAns = '';
        if (answer === correctAnswer) {
            selectedAns = 'Well-done. Your Answer Is correct';
        }
        else {
            selectedAns = 'sorry ! Your Answer Is Incorrect';
        }
        toast(`${selectedAns}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

    }



    return (
        <div>
            {/* <h1>Quiz Of {name}</h1> */}
            <div className='m-5 border border-secondary rounded p-2 text-center position-relative'>
                <FontAwesomeIcon onClick={correctAns} className='correct-ans-btn border-0' icon={faEye}></FontAwesomeIcon>

                <h3 className='my-3 mx-auto w-75 '>Question : {question}</h3>
                <hr className='w-75 mx-auto' />
                <div className='options-container'>
                    {
                        options.map((option, idx) => <p
                            key={idx}
                            onClick={() => notify(option)}
                            className='border p-3 rounded fs-5 options-ans-container'>
                            <label htmlFor={question.id}>
                                <input type="radio" name="option" id={question.id} />{option}
                            </label></p>)
                    }
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default QuizOptions;