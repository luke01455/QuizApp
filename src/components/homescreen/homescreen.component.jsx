import React from 'react';
import './homescreen.styles.scss';

import QuizCard from '../quiz-card/quiz-card.component'

const HomeScreen = () => {
    return (
        <div className='homescreen-container'>
            <div className='text-container'>
                <h1> Earn cash with your sport knowledge </h1>
                <h2> All of those days sitting on the couch watching BT Sport can finally be put to use. </h2>
            </div>
            <QuizCard />
        </div>
    )
}

export default HomeScreen;