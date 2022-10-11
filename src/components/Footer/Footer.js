import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faTwitterSquare, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footer bg-dark'>
            <div>
                <h1>Delta Quiz</h1>
                <div className='d-flex gap-5 mt-5'>
                    <p><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></p>
                    <p><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></p>
                    <p><FontAwesomeIcon icon={faYoutubeSquare}></FontAwesomeIcon></p>
                    <p><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;