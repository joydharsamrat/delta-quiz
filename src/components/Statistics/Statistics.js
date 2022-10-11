import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statics.css';

const Statistics = () => {
    const quiz = useLoaderData();
    return (

        <div>

            <h1 className='text-center text-light mt-5'>Quiz Statistics</h1>
            <hr className='text-light' />

            <div className='chart'>

                <BarChart width={300} height={200} data={quiz.data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>



    );
};

export default Statistics