import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from '../SingleTopic/SingleTopic';
import Container from 'react-bootstrap/Container';
import './Topics.css';
import Banner from '../Banner/Banner';

const Topics = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data;

    return (
        <div>
            <Banner></Banner>
            <Container>
                <div className="topics-container">
                    {
                        topics.map(topic => <SingleTopic key={topic.id} topic={topic}></SingleTopic>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Topics;