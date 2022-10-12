import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const data = useLoaderData()
    return (
        <div className='chart-container'>
            <div className='quiz-bread'>
                <Container>
                    <p>Chart of Quiz</p>
                </Container>
            </div>
            <Container>
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={150} height={200} data={data.data}>
                            <Bar dataKey="total" fill="#BF40BF" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Container>
        </div>
    );
};

export default Statistics;