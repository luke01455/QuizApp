import React from 'react';
import './homescreen.styles.scss';

import CTAButton from '../cta-button/cta-button.component'
import QuizCard from '../quiz-card/quiz-card.component'

const HomeScreen = () => {
    return (
        <div className='homescreen-container'>
            <div className='text-container'>
                <h1> Earn cash with your sport knowledge </h1>
            </div>
            {/* <button className=''> Find out more </button> */}
            <div className='cta-container'>
                <CTAButton inverted='inverted'> Start Playing </CTAButton>
            </div>
            

        </div>
    )
}

export default HomeScreen;