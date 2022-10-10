import React from 'react';

const Options = ({ option }) => {
    return (
        <div className=' border p-3'>
            <fieldset>
                <h2>
                    <input type="radio" name='option' id='option' />{option}
                </h2>
            </fieldset>
        </div>
    );
};

export default Options;