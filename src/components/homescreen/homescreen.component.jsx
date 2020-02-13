import React from 'react';
import './homescreen.styles.scss';

import CTAButton from '../cta-button/cta-button.component'
import QuizCard from '../quiz-card/quiz-card.component'

const HomeScreen = () => {
    return (
        <div className='homescreen-container'>
            <div className='text-container'>
                <h1> 
                    {/* EARN CASH WITH YOUR SPORT KNOWLEDGE */}
                    Earn cash with your sport knowledge
                     </h1>
            </div>
            {/* <button className=''> Find out more </button> */}
            <div className='cta-container'>
                <CTAButton> Start Playing </CTAButton>
            </div>
            
            <button> V </button>

        </div>
    )
}

export default HomeScreen;