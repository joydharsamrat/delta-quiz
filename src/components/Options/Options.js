import React from 'react';

const Options = ({ option }) => {
    console.log(option)
    return (
        <div className=' border p-3'>



            <p>
                <label htmlFor={``}>
                    <input type="radio" name='option' id='option' />
                    {option}
                </label>
            </p>



        </div >
    );
};

export default Options;