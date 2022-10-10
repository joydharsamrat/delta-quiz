import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className=' d-flex flex-column justify-content-center align-items-center error'>
            <h1 className='e-404'>404</h1>
            <h2 className='text-secondary fs-1'>oops !!!</h2>
            <h3> page not found</h3>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Error;