import React from 'react';
import './homescreen.styles.scss';

import QuizCard from '../quiz-card/quiz-card.component'

const HomeScreen = () => {
    return (
        <div className='homescreen-container'>
            <div className='text-container'>
                <h1> Earn cash with your sport knowledge </h1>
            </div>
            <button> Find out more </button>


        </div>
    )
}

export default HomeScreen;