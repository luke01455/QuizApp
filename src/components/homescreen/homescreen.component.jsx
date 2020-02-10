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
            {/* <QuizCard /> */}

            <div className='instruction-container'>
                <div className='instruction-section'>
                    <h1> 1 </h1>
                    <h3> Pick a quiz with a prize you'd like to win </h3>
                </div>
                <div className='instruction-section'>
                    <h1> 2 </h1>
                    <h3> Answer 5 simple questions like this </h3>
                </div>
                <div className='instruction-section'>
                    <h1> 3 </h1>
                    <h3> Each correct answer earns you an extra ticket increasing your chance to win </h3>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;